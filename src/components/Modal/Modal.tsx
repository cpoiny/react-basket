import React, { ReactNode } from "react";
import style from "./Modal.module.css"


interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const Modal = (props: ModalProps) => {
    const { children, isOpen } = props;
  return (
    <>
    {isOpen && (
        <div className={style.modalOverlay} >
          <div  className={style.modalBox}>
            {children}
          </div>
        </div>
    )}
    </>
  );
}

export default Modal;