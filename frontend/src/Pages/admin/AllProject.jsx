import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SidePannel from "./SidePannel";
import Table from "./Table";

const AllProject = () => {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector((state) => state.project);

  useEffect(() => {
    if (error) {
      window.alert(error);
    }
    setTableData(projects);
  }, [projects, dispatch, error]);

  const column = [
    { heading: "Project_id", value: "id" },
    { heading: "Project_Name", value: "name" },
    { heading: "Project_Category", value: "category" },
    { heading: "Project_Website", value: "website" },
    { heading: "Project_Language", value: "language" },
    { heading: "Delete", value: "Delete" },
    { heading: "Edit", value: "Edit" },
  ];
  return (
    <div className="main">
      {loading ? (
        "Loading"
      ) : (
        <div className="admin">
          <div>
            <SidePannel />
          </div>
          <div className="table">
            <h1>All Projects</h1>
            <Table table={tableData} column={column} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProject;
