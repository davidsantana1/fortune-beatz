import TableItem from "../../ui/TableItem";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiPencil, HiTrash, HiOutlineEllipsisVertical } from "react-icons/hi2";
import CreateBeatForm from "./CreateBeatForm";
import { convertSecondsToMinutes } from "../../utils/helpers";
import { useDeleteBeat } from "./useDeleteBeat";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { HiPlayCircle } from "react-icons/hi2";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAudioDuration } from "../../hooks/useAudioDuration";
import { useTranslation } from "react-i18next";
import { useRowNumber } from "../../hooks/useRowNumber";
import { useSearchParams } from "react-router-dom";

function BeatRow({ beat, index }) {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const { setCurrentBeat, nowPlaying } = useAudioPlayer();
  const { isDeleting, deleteBeat } = useDeleteBeat();
  const { id: beatId, name, bpm, key, type, genre, image, audio } = beat;
  const { time } = useAudioDuration(audio);
  const number = useRowNumber(index);
  const [searchParams, setSearchParams] = useSearchParams();

  const isPlaying = nowPlaying === audio;
  const open = Boolean(anchorEl);

  function handleClose() {
    setAnchorEl(null);
  }

  function handlePlay(event) {
    if (
      event.target.closest("button") ||
      event.target.closest(".modal-window") ||
      event.target.closest(".MuiMenu-root")
    ) {
      return;
    }

    if (audio === nowPlaying) setCurrentBeat(null);
    setTimeout(() => {
      setCurrentBeat(beat);
    }, 0);
  }

  return (
    <tr
      onClick={handlePlay}
      className={`group cursor-pointer transition-all hover:bg-brand-600 ${isPlaying && "bg-brand-600"}`}
    >
      <TableItem as="td">
        {!isPlaying && (
          <p className="w-[1.25rem] font-semibold group-hover:hidden">
            {number}
          </p>
        )}
        <HiPlayCircle
          className={`${isPlaying ? "flex" : "hidden"} group-hover:flex`}
          size={20}
        />
      </TableItem>
      <TableItem as="td" isImage={true}>
        <div className="p-2">
          <div className="max-w-20 overflow-hidden rounded-md">
            <img
              className="aspect-square max-w-20 object-cover"
              src={image}
              alt="Beat Image"
            />
          </div>
        </div>
      </TableItem>
      <TableItem as="td">{name}</TableItem>
      <TableItem as="td">{type}</TableItem>
      <TableItem as="td">{genre}</TableItem>
      <TableItem as="td">{convertSecondsToMinutes(time)}</TableItem>
      <TableItem as="td">{bpm}</TableItem>
      <TableItem as="td">{key}</TableItem>

      <Modal>
        <TableItem as="td">
          <div>
            <HiOutlineEllipsisVertical
              size={28}
              className="ml-auto mr-5 text-brand-50 hover:text-brand-975"
              onClick={(e) => {
                e.stopPropagation();
                setAnchorEl(e.currentTarget);
              }}
            />
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClick={handleClose}
            onClose={handleClose}
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
          <div className="flex gap-4">
            <Modal.Window name="edit">
              <CreateBeatForm beatToEdit={beat} isEditSession={true} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                disabled={isDeleting}
                onConfirm={() => {
                  searchParams.set("page", 1);
                  setSearchParams(searchParams);
                  if (audio === nowPlaying) setCurrentBeat(null);
                  deleteBeat(beatId);
                }}
                itemType="beat"
              />
            </Modal.Window>
          </div>
        </TableItem>
      </Modal>
    </tr>
  );
}

export default BeatRow;
