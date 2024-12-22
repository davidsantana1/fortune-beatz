import NavItem from "./NavItem";
import {
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineMusicalNote,
  HiOutlineDocumentText,
} from "react-icons/hi2";

function MainNav({ onOpen }) {
  function handleCloseNav() {
    if (!onOpen) return;
    onOpen(false);
  }

  return (
    <nav>
      <ul className="w-54 flex flex-col gap-2 pb-2">
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
          to="/licenses"
          title="Licenses"
          icon={<HiOutlineDocumentText />}
        />
      </ul>
    </nav>
  );
}

export default MainNav;
