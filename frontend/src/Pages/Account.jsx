import React, { useEffect } from "react";
import "../Styles/login.scss";
import { useSelector } from "react-redux";
import img1 from "../Imgs/profilePic.webp";

const Register = () => {
  const { user, error, loading} = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      window.alert(error);
    }
  }, [error]);

  return (
    <div className="main">
      {loading === true ? (
        "Loading"
      ) : (
        <div className="login">
          <div className="loginForm">
            <div className="acount_img">
              <img
                src={user.avatar && user.avatar.url ? user.avatar.url : img1}
                alt=""
              />
            </div>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
