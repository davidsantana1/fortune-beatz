import TableItem from "../../ui/TableItem";
import { FaPaypal, FaRegCreditCard } from "react-icons/fa";
import { formatDate, USDollar } from "../../utils/helpers";

function SalesRow({ sale, number }) {
  const { beatName, amount, buyer, date, paymentMethod, licenseType } = sale;
  return (
    <tr>
      <TableItem as="td">
        <p className="w-[1.25rem] font-semibold group-hover:hidden">{number}</p>
      </TableItem>
      <TableItem as="td">{beatName}</TableItem>
      <TableItem as="td">{buyer}</TableItem>
      <TableItem as="td">{formatDate(date)}</TableItem>
      <TableItem as="td">{licenseType}</TableItem>
      <TableItem as="td">
        <div className="w-full">
          <div
            className={`${paymentMethod === "Paypal" ? "bg-blue-900" : "bg-green-500"} ml-12 inline-block rounded-md p-2`}
          >
            {paymentMethod === "Paypal" ? (
              <FaPaypal size={20} />
            ) : (
              <FaRegCreditCard size={20} />
            )}
          </div>
        </div>
      </TableItem>
      <TableItem as="td">{USDollar.format(amount)}</TableItem>
    </tr>
  );
}

export default SalesRow;
