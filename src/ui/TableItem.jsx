function TableItem({ children, as = "th", className = "", isImage = false }) {
  const TableEl = as ? as : "td";

  return (
    <TableEl
      className={`${className} ${as === "th" ? "text-left font-semibold tracking-wide" : ""} whitespace-nowrap text-brand-50 ${isImage ? "p-0" : "p-4"} text-base`}
    >
      {children}
    </TableEl>
  );
}

export default TableItem;
