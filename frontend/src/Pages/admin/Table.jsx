import React from "react";

const Table = ({ table, column }) => {
  return (
    <div className="main">
      <table>
        <thead>
          <tr>
            {column.map((item, i) => (
              <TableHead key={i} item={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((item, i) => (
            <TableRow key={i} item={item} column={column} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
const TableHead = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item }) => {
  const editHandler = () => {
    window.alert("hello Edit Me");
  };
  const deleteHandler = () => {
   window.alert("hello Delete Me");
  };
  
  return (
    <tr>
      <td>{item._id}</td>
      <td>{item.name}</td>
      <td>{item.category?item.category:item.email}</td>
      <td>{item.website?item.website:item.phone}</td>
      <td>{item.language?item.language:item.role}</td>
      <td onClick={editHandler} className="btn">Edit</td>
      <td onClick={deleteHandler} className="btn">Delete</td>
    </tr>
  );
};
export default Table;
