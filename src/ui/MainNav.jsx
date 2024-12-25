import { useTranslation } from "react-i18next";
import NavItem from "./NavItem";
import {
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlineMusicalNote,
  HiOutlineDocumentText,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";
import LanguageSelector from "./LanguageSelector";
import { useLogout } from "../features/authentication/useLogout";
import SpinnerMini from "./SpinnerMini";

function MainNav({ onOpen }) {
  const { t } = useTranslation();
  const { isPending } = useLogout();

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

        <NavItem
          onClick={handleCloseNav}
          to="/login"
          title={t("logoutTitle")}
          icon={isPending ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
        />
      </ul>
    </nav>
  );
}

export default MainNav;
