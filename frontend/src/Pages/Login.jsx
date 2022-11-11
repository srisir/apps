import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Actions/userAction";
import "../Styles/login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();
  const { error, user } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
  };
  useEffect(() => {
    if (user && user.verified === true) {
      push("/account");
    }
  }, [error, user, dispatch, push]);
  return (
    <div className="main">
      <div className="login">
        <div className="loginForm">
          <form onSubmit={loginHandler}>
            <input
              type="email"
              placeholder="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className="btn" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
