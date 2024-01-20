import "../Modal/Modal.css";
import Modal from "../Modal/Modal";

const SuccessModal = ({ onClose, onAltClick }) => {
  return (
    <Modal name="success" onClose={onClose}>
      <h3 className="modal__title-success">
        Registration successfully completed!
      </h3>
      <button className="modal__button-success" onClick={onAltClick}>
        Sign in
      </button>
    </Modal>
  );
};

export default SuccessModal;
