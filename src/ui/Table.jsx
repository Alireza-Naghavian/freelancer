import React from "react";

function Table({ children }) {
  return (
    <div className="bg-secondary-0 overflow-x-auto ">
      <table>{children}</table>
    </div>
  );
}
const TableHead = ({ children }) => {
  return (
    <thead>
      <tr className="title-row"> {children}</tr>
    </thead>
  );
};
const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};
const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};
Table.Header = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
export default Table;
