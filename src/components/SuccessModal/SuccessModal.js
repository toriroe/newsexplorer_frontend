import "./SuccessModal.css";

const SuccessModal = ({ onClose, onAltClick }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal__button-close"
          type="button"
          onClick={onClose}
        />
        <h3 className="modal__title">Registration successfully completed!</h3>
        <button className="modal__button-signin" onClick={onAltClick}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
