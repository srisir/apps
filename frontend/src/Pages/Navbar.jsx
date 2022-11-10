import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Actions/userAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, message, error } = useSelector((state) => state.user);
  const logout_me = async () => {
    await dispatch(logout());
  };
  useEffect(() => {
    if (error) {
      window.alert(error);
    }
    if (message) {
      window.alert(message);
    }
  }, [message, error]);
  return (
    <>
      <div className="nav_main">
        <div className="logo">
          <Link to="/">CMK H Care</Link>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/profession">Profession</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
          <Link
            to="/dashboard"
            className={user && user.role === "admin" ? "show" : "hide"}
          >
            DashBoard
          </Link>
        </div>
        <div className="users">
          <div className={user === null ? "show" : "hide"}>
            <Link to="/login">Login</Link>
            <Link to="/register">SignUp</Link>
          </div>
          <div className={user === null ? "hide" : "show"}>
            <Link to="/account">Profile</Link>
            <Link to="/" onClick={logout_me}>
              LogOut
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
