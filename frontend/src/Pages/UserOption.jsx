import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Actions/userAction";

const UserOptions = () => {
  const dispatch = useDispatch();
  const x = useNavigate();

  const logoutHandler = async () => {
    await dispatch(logout());
    x("/");
    alert("logout successfully");
  };

  return (
    <>
      <div>
        <Link to="/projects">Projects</Link>
        <Link to="/profession">Profession</Link>
        <Link to="/services">Services</Link>
        <button onClick={logoutHandler}>LogOut</button>
      </div>
    </>
  );
};

export default UserOptions;
