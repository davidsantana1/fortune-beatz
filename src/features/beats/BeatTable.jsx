import Table from "../../ui/Table";
import TableItem from "../../ui/TableItem";
import BeatRow from "./BeatRow";
import { useBeats } from "./useBeats";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import { useTranslation } from "react-i18next";

function BeatTable() {
  const { t } = useTranslation();
  const { isPending, beats, error, count } = useBeats();

  if (isPending) return <Spinner />;
  if (error) return <Error errorMessage={error.message} />;

  return (
    <Table count={count}>
      <Table.Header>
        <TableItem>#</TableItem>
        <TableItem isImage={true}></TableItem>
        <TableItem>{t("beatsTableName")}</TableItem>
        <TableItem>{t("beatsTableArtistType")}</TableItem>
        <TableItem>{t("beatsTableGenre")}</TableItem>
        <TableItem>{t("beatsTableDuration")}</TableItem>
        <TableItem>BPM</TableItem>
        <TableItem>{t("beatsTableKey")}</TableItem>
        <TableItem></TableItem>
      </Table.Header>
      <Table.Body
        data={beats}
        render={(beat, index) => (
          <BeatRow index={index} beat={beat} key={beat.id} />
        )}
      />
    </Table>
  );
}

export default BeatTable;
