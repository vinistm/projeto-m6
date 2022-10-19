import {
  ModalMaterial,
  ConfirmModal,
  ModalTitle,
  H5,
  ModalLock,
  ModalBody,
} from "./style";

const Modal = ({
  children,
  title,
  type,
  displayModal,
  setDisplayModal,
  ...rest
}) => {
  return (
    displayModal && (
      <ConfirmModal
        onClick={(e) => e.target === e.currentTarget && setDisplayModal(false)}
      >
        <ModalMaterial>
          <ModalTitle>
            <H5>{title}?</H5>
            <ModalLock onClick={() => setDisplayModal(false)}>
              &times;
            </ModalLock>
          </ModalTitle>
          <ModalBody>{children}</ModalBody>
        </ModalMaterial>
      </ConfirmModal>
    )
  );
};

export default Modal;

/* 
  Exemplo de uso na página
  
  const [displayMod, setDisplayMod] = useState(true);

  <Modal
  title={"Editar Anúncio"}
  displayModal={displayMod}  
  setDisplayModal={setDisplayMod}
>
  <div>Teste</div>
  <div>outra div</div>
  <div>terceira DIV</div>
</Modal>; 

*/
