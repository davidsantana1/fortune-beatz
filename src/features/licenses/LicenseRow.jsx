import { Menu, MenuItem } from "@mui/material";
import Modal from "../../ui/Modal";
import TableItem from "../../ui/TableItem";
import { HiOutlineEllipsisVertical, HiPencil, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteLicense } from "./useDeleteLicense";
import { useState } from "react";
import CreateLicenseForm from "./CreateLicenseForm";
import { formatNumber, USDollar } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

function LicenseRow({ license, number }) {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const { isDeleting, deleteLicense } = useDeleteLicense();

  const open = Boolean(anchorEl);

  function handleClose(e) {
    e.stopPropagation();
    setAnchorEl(null);
  }
  const {
    id,
    name,
    price,
    musicVideos,
    allowedCopies,
    allowedStreams,
    forProfitLivePerformance,
    allowedRadioStations,
  } = license;

  return (
    <tr>
      <TableItem as="td">
        <p className="w-[1.25rem] font-semibold group-hover:hidden">{number}</p>
      </TableItem>
      <TableItem as="td">{name}</TableItem>
      <TableItem as="td">{USDollar.format(price)}</TableItem>
      <TableItem className="text-center" as="td">
        {musicVideos}
      </TableItem>
      <TableItem as="td">{formatNumber(allowedCopies)}</TableItem>
      <TableItem as="td">{formatNumber(allowedStreams)}</TableItem>
      <TableItem className="text-center" as="td">
        {forProfitLivePerformance ? t("licensesTableYes") : "No"}
      </TableItem>
      <TableItem className="text-center" as="td">
        {allowedRadioStations}
      </TableItem>
      <Modal>
        <TableItem as="td">
          <div>
            <HiOutlineEllipsisVertical
              size={28}
              className="cursor-pointer text-brand-50 hover:text-brand-950"
              onClick={(e) => {
                e.stopPropagation();
                setAnchorEl(e.currentTarget);
              }}
            />
          </div>
          <Menu
            id="license-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Modal.Open opens="edit">
              <MenuItem className="gap-2" onClick={handleClose}>
                <HiPencil /> {t("formEditButton")}
              </MenuItem>
            </Modal.Open>

            <Modal.Open opens="delete">
              <MenuItem className="gap-2" onClick={handleClose}>
                <HiTrash /> {t("contextMenuDelete")}
              </MenuItem>
            </Modal.Open>
          </Menu>

          <Modal.Window name="edit">
            <CreateLicenseForm license={license} isEditSession={true} />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              disabled={isDeleting}
              onConfirm={() => deleteLicense(id)}
              itemType={t("licensesConfirmDelete")}
            />
          </Modal.Window>
        </TableItem>
      </Modal>
    </tr>
  );
}

export default LicenseRow;
