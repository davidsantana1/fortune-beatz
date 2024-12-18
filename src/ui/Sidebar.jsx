import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import MainNav from "./MainNav";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden w-full flex-col items-center bg-brand-999 p-8 lg:flex">
        <Logo />
        <Heading as="h3" color="light" variant="secondary" size="sm">
          Fortune Beatz
        </Heading>
        <MainNav />
      </div>
      <div className="sticky flex flex-col items-center justify-center gap-4 bg-brand-999 p-2 shadow-md lg:hidden">
        <div className="grid w-full grid-cols-3 items-center px-6">
          <div
            className="cursor-pointer justify-start text-brand-50 transition-all hover:text-brand-500"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <HiXMark size={40} /> : <HiBars3 size={40} />}
          </div>
          <Logo className="justify-self-center" />
        </div>
        <div className={`transition-all ${isOpen ? "flex" : "hidden"}`}>
          <MainNav onOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
