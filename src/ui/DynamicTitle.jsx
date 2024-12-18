import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/dashboard": "Fortune Beatz - Dashboard",
      "/beats": "Fortune Beatz - Beats",
      "/sales": "Fortune Beatz - Sales",
    };

    document.title = titles[location.pathname] || "Fortune Beatz";
  }, [location]);

  return null;
};

export default DynamicTitle;
