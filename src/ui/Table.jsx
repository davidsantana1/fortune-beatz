import Empty from "../ui/Empty";

function Table({ children }) {
  return (
    <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-brand-50">{children}</table>
      </div>
    </div>
  );
}

function Header({ children }) {
  return (
    <thead className="bg-brand-900 tracking-wide text-brand-200">
      <tr>{children}</tr>
    </thead>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment.</Empty>;
  return (
    <tbody className="divide-y divide-brand-600 bg-brand-700">
      {data.map(render)}
    </tbody>
  );
}

Table.Header = Header;
Table.Body = Body;

export default Table;
