import Empty from "../ui/Empty";

function Table({ children }) {
  return (
    <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        <table className="text-brand-50 w-full text-left">{children}</table>
      </div>
    </div>
  );
}

function Header({ children }) {
  return (
    <thead className="bg-brand-900 text-brand-200 tracking-wide">
      <tr>{children}</tr>
    </thead>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment.</Empty>;
  return (
    <tbody className="divide-brand-600 bg-brand-700 divide-y">
      {data.map(render)}
    </tbody>
  );
}

Table.Header = Header;
Table.Body = Body;

export default Table;
