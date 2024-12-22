import { useTranslation } from "react-i18next";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";

function Dashboard() {
  const { t } = useTranslation();
  return (
    <>
      <Heading color="light">{t("dashboardTitle")}</Heading>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
