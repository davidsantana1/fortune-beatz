import NavItem from "./NavItem";
import {
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineMusicalNote,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <NavItem to="/dashboard" title="Home" icon={<HiOutlineHome />} />
        <NavItem to="/beats" title="Beats" icon={<HiOutlineMusicalNote />} />
        <NavItem to="/sales" title="Sales" icon={<HiOutlineCurrencyDollar />} />
        <NavItem
          to="/settings"
          title="Settings"
          icon={<HiOutlineCog6Tooth />}
        />
      </ul>
    </nav>
  );
}

export default MainNav;
