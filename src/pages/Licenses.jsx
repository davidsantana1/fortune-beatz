import { useTranslation } from "react-i18next";
import AddLicense from "../features/licenses/AddLicense";
import LicensesTable from "../features/licenses/LicensesTable";
import Heading from "../ui/Heading";

function Licenses() {
  const { t } = useTranslation();
  return (
    <div>
      <Heading color="light">{t("licensesTitle")}</Heading>
      <LicensesTable />
      <AddLicense />
    </div>
  );
}

export default Licenses;
