import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { STORE_NAME } from "../utils/constants";
import { useTranslation } from "react-i18next";

const DynamicTitle = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    let title = `${STORE_NAME} -`;
    const titles = {
      "/dashboard": `${title} ${t("dashboardTitle")}`,
      "/beats": `${title} Beats`,
      "/sales": `${title} ${t("salesTitle")}`,
      "/licenses": `${title} ${t("licensesTitle")}`,
    };

    document.title = titles[location.pathname] || "Fortune Beatz";
  }, [location, t]);

  return null;
};

export default DynamicTitle;
