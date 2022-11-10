import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { all_projects } from "../../Redux/Actions/projectAction";
import { all_users } from "../../Redux/Actions/userAction";
import "../../Styles/admin.scss";

const SidePannel = () => {
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="side_pannel">
        <Link to="/allusers">
          <span onClick={()=>dispatch(all_users())}>Users</span>
        </Link>
        <Link to="/allprojects">
        <span onClick={()=>dispatch(all_projects())}>Projects</span>
        </Link>
      </div>
    </div>
  );
};

export default SidePannel;
