import { User } from "../Schema/userSchema.js";
import { createToken } from "../Utils/createToken.js";
import cloudinary from "cloudinary";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 300,
      crop: "scale",
    });
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "already registred" });
    }
    const otp = Math.floor(Math.random() * 1000000);
    user = await User.create({
      name,
      email,
      password,
      phone,
      otp,
      otp_expire: new Date(Date.now() + process.env.OTP_EXPIRE * 60 * 1000),
      avatar: { public_id: myCloud.public_id, url: myCloud.secure_url },
    });

    console.log(otp);
    createToken(
      res,
      user,
      201,
      "OTP Send On Your Email, Plz Verify Your Account"
    );
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

//verify User..............
export const verifyUser = async (req, res) => {
  try {
    const otp = Number(req.body.x);
    const user = await User.findById(req.user.id);
    console.log(otp);
    console.log(user.otp);

    if (user.otp !== otp || user.otp_expire < Date.now()) {
      return res
        .status(400)
        .json({ success: false, message: "OTP Wrong or Expired" });
    }

    user.verified = true;
    user.otp = null;
    user.otp_expire = null;

    const data = await user.save();

    res.status(200).json({
      success: true,
      message: "User Verified Successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get User Detail
export const userDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res
      .status(200)
      .json({ success: true, user, message: "User Login Successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Enter All Field" });
    }

    console.log(email, password);
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Email or Password Not Match" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalied Email or Password" });
    }
    createToken(res, user, 200, "Login Successfully");
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    console.log(error);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()) })
      .json({ success: true, message: "Logged out Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  } 
};

export const all_User = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
