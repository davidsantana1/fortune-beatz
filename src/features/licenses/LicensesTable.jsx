import Table from "../../ui/Table";
import TableItem from "../../ui/TableItem";
import { useLicenses } from "./useLicenses";
import Spinner from "../../ui/Spinner";
import LicenseRow from "./LicenseRow";
import { useTranslation } from "react-i18next";

function LicensesTable() {
  const { t } = useTranslation();
  const { isPending, licenses, count } = useLicenses();

  if (isPending) return <Spinner />;

  return (
    <Table count={count} licenses={true}>
      <Table.Header>
        <TableItem>#</TableItem>
        <TableItem>{t("licensesTableName")}</TableItem>
        <TableItem>{t("licensesTablePrice")}</TableItem>
        <TableItem>{t("licensesTableMusicVideos")}</TableItem>
        <TableItem>{t("licensesTableCopies")}</TableItem>
        <TableItem>{t("licensesTableStreams")}</TableItem>
        <TableItem>{t("licensesTableProfitLivePerformances")}</TableItem>
        <TableItem>{t("licensesTableRadioStations")}</TableItem>
        <TableItem></TableItem>
      </Table.Header>
      <Table.Body
        data={licenses}
        render={(license, index) => (
          <LicenseRow index={index} license={license} key={license.id} />
        )}
      />
    </Table>
  );
}

export default LicensesTable;
