import { cloneElement } from "react";
import Heading from "./Heading";
import { NavLink } from "react-router-dom";

function NavItem({ to, title, icon }) {
  return (
    <li className="w-full">
      <NavLink
        className="hover:bg-brand-975 flex w-full items-center justify-center gap-3 rounded-md px-12 py-2"
        to={to}
      >
        {cloneElement(icon, {
          className: "text-gray-400 h-[1.6rem] w-[1.6rem]",
        })}
        <Heading
          as="span"
          color="lighter"
          size="sm"
          variant="tertiary"
          margin="none"
        >
          {title}
        </Heading>
      </NavLink>
    </li>
  );
}

export default NavItem;
