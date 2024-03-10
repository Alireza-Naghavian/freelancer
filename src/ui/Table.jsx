function Table({ children }) {
  return (
    <div className="bg-secondary-0 overflow-x-auto max-w-6xl mx-auto ">
      <table className="table w-full">{children}</table>
    </div>
  );
}
const TableHead = ({ children }) => {
  return (
    <thead className="flex justify-between w-full ">
      <tr className="grid grid-cols-9 w-full text-center text-base mt-8 child:mx-auto rounded-lg child:py-4">{children}</tr>
    </thead>
  );
};
const TableBody = ({ children }) => {
  return <tbody className="">{children}</tbody>;
};
const TableRow = ({ children }) => {
  return <tr className="grid grid-cols-9  w-full child:my-auto child:text-center child:mx-auto   mt-8 child:text-gray-700 rounded-lg child:font-DanaBold bg-gray-300   child:py-2">{children}</tr>;
};
Table.Header = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
export default Table;
