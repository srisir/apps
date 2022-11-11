import React, { useState } from "react";
import "../Styles/login.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrors,
  verifyme,
} from "../Redux/Actions/userAction";
import { useEffect } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const [otp, setOtp] = useState("");
  const { message, error, user } = useSelector((state) => state.user);

  const otpSubmit = async (e) => {
    e.preventDefault();
    await dispatch(verifyme(otp));
  };

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors());
    }
    if (user && user.verified === true) {
      push("/account");
    }
  }, [push, user, dispatch,error, message]);

  return (
    <div className="main">
      <div className="login">
        <div className="loginForm">
          <div className="user_info">
            <ul>
              <li>Id: {user._id}</li>
              <li>Name: {user.name}</li>
              <li>Email: {user.email}</li>
              <li>Phone: {user.phone}</li>
              <li>
                Verified or Not:{" "}
                {user.verified === true ? "Verified" : "Not Verified"}
              </li>
            </ul>
          </div>
          <div className="">
            <form className="signUpForm" onSubmit={otpSubmit}>
              <div>
                <input
                  type="number"
                  placeholder="OTP"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <input type="submit" value="Verify" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
