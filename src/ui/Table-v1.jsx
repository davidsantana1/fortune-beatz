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

function Footer({ children }) {
  return (
    <tfoot className="flex w-full bg-blue-500 p-2">
      <tr className="w-full">
        <td colSpan={9999}>{children}</td>
      </tr>
    </tfoot>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
