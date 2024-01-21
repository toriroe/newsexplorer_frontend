import { useEffect } from "react";

import "./Modal.css";

const Modal = ({ name, onClose, children }) => {
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  const handleOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal modal_type_${name}`} onClick={handleOverlay}>
      <div className={`modal__content modal__content_${name}`}>
        <button
          className="modal__button-close"
          type="button"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
