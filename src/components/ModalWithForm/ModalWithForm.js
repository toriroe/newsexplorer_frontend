import "../Modal/Modal.css";
import Modal from "../Modal/Modal";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
  altButtonText,
  onAltClick,
  isDisabled,
}) => {
  return (
    <Modal name={name} onClose={onClose}>
      <h3 className="modal__title">{title}</h3>
      <form className="modal__form" onSubmit={onSubmit}>
        {children}

        <button
          className={`modal__button-submit ${
            isDisabled === true ? "modal__button-submit_disabled" : ""
          }`}
          type="submit"
          disabled={isDisabled}
        >
          {buttonText}
        </button>
        <p className="modal__text">
          or{" "}
          <button className="modal__button-alt" onClick={onAltClick}>
            {altButtonText}
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default ModalWithForm;
