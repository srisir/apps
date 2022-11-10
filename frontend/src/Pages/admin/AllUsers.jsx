import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SidePannel from "./SidePannel";
import Table from "./Table";
import Loading from "../Loading";

const AllUsers = () => {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      window.alert(error);
    }
    setTableData(users);
  }, [users, dispatch, error]);

  const column = [
    { heading: "User_id", value: "id" },
    { heading: "User_Name", value: "name" },
    { heading: "User_Email", value: "email" },
    { heading: "User_Phone", value: "phone" },
    { heading: "User_Role", value: "role" },
    { heading: "Delete", value: "Delete" },
    { heading: "Edit", value: "Edit" },
  ];
  return (
    <div className="main">
      {loading ? (
        <Loading />
      ) : (
        <div className="admin">
          <div>
            <SidePannel />
          </div>
          <div className="table">
            <h1>All Users</h1>
            <Table table={tableData} column={column} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
