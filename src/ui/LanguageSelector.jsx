import { useTranslation } from "react-i18next";
import Heading from "./Heading";
import NavItem from "./NavItem";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClose() {
    setAnchorEl(null);
  }

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <>
      <li>
        <NavItem
          onClick={(e) => {
            e.stopPropagation();
            setAnchorEl(e.currentTarget);
          }}
          langSelector={true}
        >
          <Heading
            id="heading-lang"
            as="span"
            color="nav"
            size="sm"
            variant="tertiary"
            margin="none"
          >
            {t("navLanguage")}
          </Heading>
        </NavItem>
        <Menu
          id="lang-menu"
          anchorEl={anchorEl}
          open={open}
          onClick={handleClose}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            className="gap-2"
            onClick={() => {
              changeLanguage("en");
              handleClose();
            }}
          >
            <span>🇺🇸</span>
            {t("navLangOptionEnglish")}
          </MenuItem>
          <MenuItem
            className="gap-2"
            onClick={() => {
              changeLanguage("es");
              handleClose();
            }}
          >
            <span>🇪🇸</span>
            {t("navLangOptionSpanish")}
          </MenuItem>
        </Menu>
      </li>
    </>
  );
}

export default LanguageSelector;
