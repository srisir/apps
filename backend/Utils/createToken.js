export const createToken = (res, user, status_code, message) => {
  const token = user.getJWTToken();
  const options = {
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRE * 24 * 60 * 60 * 1000
    ),
  }; 
  const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    phone: user.phone,
    verified: user.verified,
  };
  res
    .status(status_code)
    .cookie("token", token, options)
    .json({ success: true, message, user: userData, token });
};

