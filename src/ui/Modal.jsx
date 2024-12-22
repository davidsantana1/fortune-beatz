import ModalButton from "./ModalButton";
import Overlay from "./Overlay";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { createContext, useState, useContext, cloneElement } from "react";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <div
        onClick={(e) => e.stopPropagation()}
        ref={ref}
        className="fixed left-1/2 top-1/2 flex w-4/5 -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg bg-brand-900 px-8 pb-8 pt-8 shadow-lg transition-all md:w-3/5"
      >
        <ModalButton onClick={close}>
          <HiXMark />
        </ModalButton>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </Overlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
