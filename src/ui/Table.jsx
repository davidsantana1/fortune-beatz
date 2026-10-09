import Empty from "../ui/Empty";
import Pagination from "./Pagination";

function Table({ count, children, licenses = false }) {
  return (
    <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full bg-brand-700 text-left text-brand-50">
          {children}
        </table>
      </div>
      <Pagination count={count} licenses={licenses} />
    </div>
  );
}

function Header({ children }) {
  return (
    <thead className="bg-brand-800 tracking-wide text-brand-200">
      <tr>{children}</tr>
    </thead>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return (
      <div className="p-4">
        <Empty>No data to show at the moment.</Empty>
      </div>
    );
  return (
    <tbody className="divide-y divide-brand-600 bg-brand-700">
      {data.map(render)}
    </tbody>
  );
}

Table.Header = Header;
Table.Body = Body;

export default Table;
