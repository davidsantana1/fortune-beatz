import NavItem from "./NavItem";
import {
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineMusicalNote,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

function MainNav({ onOpen }) {
  function handleCloseNav() {
    if (!onOpen) return;
    onOpen(false);
  }
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <NavItem
          onClick={handleCloseNav}
          to="/dashboard"
          title="Home"
          icon={<HiOutlineHome />}
        />
        <NavItem
          onClick={handleCloseNav}
          to="/beats"
          title="Beats"
          icon={<HiOutlineMusicalNote />}
        />
        <NavItem
          onClick={handleCloseNav}
          to="/sales"
          title="Sales"
          icon={<HiOutlineCurrencyDollar />}
        />
        <NavItem
          onClick={handleCloseNav}
          to="/settings"
          title="Settings"
          icon={<HiOutlineCog6Tooth />}
        />
      </ul>
    </nav>
  );
}

export default MainNav;
