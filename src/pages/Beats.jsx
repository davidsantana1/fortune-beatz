import { useTranslation } from "react-i18next";
import AddBeat from "../features/beats/AddBeat";
import BeatTable from "../features/beats/BeatTable";
import Heading from "../ui/Heading";

function Beats() {
  const { t } = useTranslation();
  return (
    <>
      <Heading color="light">{t("beatsTitle")}</Heading>
      <BeatTable />
      <AddBeat />
    </>
  );
}

export default Beats;
