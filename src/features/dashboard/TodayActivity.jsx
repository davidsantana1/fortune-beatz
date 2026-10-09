import { useTranslation } from "react-i18next";
import Heading from "../../ui/Heading";
import TodaySales from "../sales/TodaySales";

function TodayActivity() {
  const { t } = useTranslation();
  return (
    <div className="h-80 rounded-md bg-brand-900 p-6">
      <Heading size="sm" as="h2">
        {t("todayActivityTitle")}
      </Heading>
      <TodaySales />
    </div>
  );
}

export default TodayActivity;
