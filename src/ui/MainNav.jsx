import { useTranslation } from "react-i18next";
import NavItem from "./NavItem";
import {
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineMusicalNote,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import LanguageSelector from "./LanguageSelector";

function MainNav({ onOpen }) {
  const { t } = useTranslation();
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
          title={t("navHome")}
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
          title={t("salesTitle")}
          icon={<HiOutlineCurrencyDollar />}
        />
        <NavItem
          onClick={handleCloseNav}
          to="/licenses"
          title={t("licensesTitle")}
          icon={<HiOutlineDocumentText />}
        />
        <LanguageSelector />
      </ul>
    </nav>
  );
}

export default MainNav;
