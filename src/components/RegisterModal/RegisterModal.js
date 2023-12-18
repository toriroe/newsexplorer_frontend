import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../UseForm/useForm";

const RegisterModal = ({ onClose, onRegister, onAltClick, isLoading }) => {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({ name: "", email: "", password: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values);
  };

  return (
    <ModalWithForm
      name="register"
      title="Sign up"
      onClose={onClose}
      buttonText={isLoading ? "Loading..." : "Sign up"}
      altButtonText="Sign in"
      onAltClick={onAltClick}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <div className="modal__form-content">
        <label>
          <p className="modal__input-title">Email</p>
          <input
            className="modal__form-input"
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </label>
        <span className="modal__error">{errors.email}</span>
        <label>
          <p className="modal__input-title">Password</p>
          <input
            className="modal__form-input"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <span className="modal__error">{errors.password}</span>
        <label>
          <p className="modal__input-title">Username</p>
          <input
            className="modal__form-input"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Enter your username"
            required
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <span className="modal__error">{errors.name}</span>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
