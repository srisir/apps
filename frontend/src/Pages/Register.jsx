import React, { useEffect, useState } from "react";
import "../Styles/login.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../Redux/Actions/userAction";
import img1 from "../Imgs/profilePic.webp";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const { error, isAuthenticated, message } = useSelector(
    (state) => state.user
  );
  const push = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const { name, email, password, phone } = user;

  const [avatar, setAvatar] = useState(img1);
  const [avatarPreview, setAvatarPreview] = useState(img1);

  const registerSubmit = (e) => {
    e.preventDefault();
    const x = new FormData();
    x.set("name", name);
    x.set("email", email);
    x.set("password", password);
    x.set("phone", phone);
    x.set("avatar", avatar);

    dispatch(register(x));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      push("/verify");
    }
  }, [dispatch, push, error, isAuthenticated, message]);

  return (
    <div className="main">
      <div className="login">
        <div className="loginForm">
          <form
            className="signUpForm"
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="First Name"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="mobile number"
                required
                name="phone"
                value={phone}
                onChange={registerDataChange}
              />
            </div>
            <div id="registerImage">
              <img src={avatarPreview} alt="Avatar Preview" />
              <input
                type="file"
                required
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>
            <input type="submit" value="Register" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
