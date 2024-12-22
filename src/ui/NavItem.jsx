import { cloneElement } from "react";
import Heading from "./Heading";
import { NavLink } from "react-router-dom";
import { HiOutlineGlobeAlt } from "react-icons/hi";

function NavItem({
  to,
  title,
  icon,
  langSelector = false,
  children,
  onClick,
  ...props
}) {
  const classes =
    "flex w-full items-center gap-3 rounded-md px-12 py-2 transition-all hover:bg-brand-975";

  if (langSelector)
    return (
      <div onClick={onClick} className={`${classes} group cursor-pointer`}>
        <HiOutlineGlobeAlt className="h-[1.6rem] w-[1.6rem] text-gray-400 group-hover:first:stroke-brand-500" />
        {children}
      </div>
    );

  return (
    <li className="w-full" {...props}>
      <NavLink className={classes} to={to}>
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
