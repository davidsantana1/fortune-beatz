import { HiExclamationTriangle } from "react-icons/hi2";
import Heading from "./Heading";

function TopMessage({ noMargin, children }) {
  return (
    <div
      className={`${noMargin ? "" : "mt-[4.5rem]"} flex w-screen items-center justify-center gap-2 bg-orange-600 p-3 px-5 shadow-lg lg:mt-0`}
    >
      <HiExclamationTriangle
        size={22}
        className="hidden text-brand-50 md:flex"
      />
      <Heading size="sm" margin="none" as="h4">
        {children}
      </Heading>
    </div>
  );
}

export default TopMessage;
