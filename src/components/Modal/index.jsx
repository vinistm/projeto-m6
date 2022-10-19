import { useState } from "react";
import {
  ModalMaterial,
  ConfirmModal,
  ModalTitle,
  H7,
  ModalLock,
  ModalBody,
  YesButton,
  NoButton,
} from "./style";

const Modal = ({ children, title, width, height, type, ...rest }) => {
  const [displayModal, setDisplayModal] = useState(true);
  const [eventModalName, setEventModalName] = useState("");

  return (
    displayModal && (
      <ConfirmModal
        onClick={(e) => e.target === e.currentTarget && setDisplayModal(false)}
      >
        <ModalMaterial>
          <ModalTitle>
            <H7>{title}?</H7>
            <ModalLock onClick={() => setDisplayModal(false)}>
              &times;
            </ModalLock>
          </ModalTitle>
          <ModalBody>
            {children}
            <YesButton onClick={() => console.log("Yes")}>Sim</YesButton>
            <NoButton onClick={() => setDisplayModal(false)}>Não</NoButton>
          </ModalBody>
        </ModalMaterial>
      </ConfirmModal>
    )
  );
};

export default Modal;
