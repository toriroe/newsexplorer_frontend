import "./ModalWithForm.css";

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
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__button-close"
          type="button"
          onClick={onClose}
        />
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
      </div>
    </div>
  );
};

export default ModalWithForm;
