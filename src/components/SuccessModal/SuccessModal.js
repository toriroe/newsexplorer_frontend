import "./SuccessModal.css";

const SuccessModal = ({ onClose, onAltClick }) => {
  return (
    <div className="success-modal">
      <div className="success-modal__content">
        <button
          className="success-modal__button-close"
          type="button"
          onClick={onClose}
        />
        <h3 className="success-modal__title">
          Registration successfully completed!
        </h3>
        <button className="success-modal__button-signin" onClick={onAltClick}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
