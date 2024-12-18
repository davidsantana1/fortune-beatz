import TableItem from "../../ui/TableItem";
import { FaPaypal, FaRegCreditCard } from "react-icons/fa";
import { USDollar } from "../../utils/helpers";

function SalesRow({ sale }) {
  const { name, price, buyer, date, paymentMethod, licenseType } = sale;
  return (
    <tr className="cursor-pointer hover:bg-brand-600">
      <TableItem as="td">{name}</TableItem>
      <TableItem as="td">{buyer}</TableItem>
      <TableItem as="td">{date}</TableItem>
      <TableItem as="td">{licenseType}</TableItem>
      <TableItem as="td">
        <div className="w-full">
          <div
            className={`${paymentMethod === "paypal" ? "bg-blue-900" : "bg-green-500"} ml-12 inline-block rounded-md p-2`}
          >
            {paymentMethod === "paypal" ? (
              <FaPaypal className="" size={20} />
            ) : (
              <FaRegCreditCard size={20} />
            )}
          </div>
        </div>
      </TableItem>
      <TableItem as="td">{USDollar.format(price)}</TableItem>
    </tr>
  );
}

export default SalesRow;
