import { HiPencil, HiTrash } from "react-icons/hi2";
import TableItem from "./TableItem";
import Button from "./Button";

function TableMenu() {
  return (
    <TableItem as="td">
      <div className="flex gap-4">
        <Button variant="primary" size="lg">
          <HiPencil />
        </Button>
        <Button variant="danger" size="lg">
          <HiTrash />
        </Button>
      </div>
    </TableItem>
  );
}

export default TableMenu;
