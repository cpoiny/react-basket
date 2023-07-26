// import React, { ReactNode } from "react";
// import style from "./Modal.module.css"


// interface ModalProps {
//   children?: ReactNode;
//   isOpen: boolean;
//   toggle: () => void;
// }

// const Modal = (props: ModalProps) => {
//     const { children, isOpen } = props;
//   return (
//     <>
//     {isOpen && (
//         <div className={style.modalOverlay} >
//           <div  className={style.modalBox}>
//             {children}
//           </div>
//         </div>
//     )}
//     </>
//   );
// }

// export default Modal;

import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './modal-style';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
