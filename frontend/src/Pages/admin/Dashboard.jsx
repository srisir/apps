import React from "react";
import SidePannel from "./SidePannel";

const Dashboard = () => {
  return (
    <>
      <div className="main ">
        <div className="admin">
          <div>
            <SidePannel />
          </div>
          <div>
            <h1>DashBoard</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
