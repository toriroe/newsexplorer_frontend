import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../UseForm/useForm";

const SignInModal = ({ onClose, onSignIn, onAltClick, isLoading }) => {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({ email: "", password: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignIn(values);
  };

  return (
    <ModalWithForm
      title="Sign in"
      onClose={onClose}
      buttonText={isLoading ? "Loading..." : "Sign up"}
      altButtonText="Sign up"
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
            placeholder="Email"
            minLength="1"
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
            placeholder="Password"
            minLength="1"
            required
            value={values.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <span className="modal__error">{errors.password}</span>
    </ModalWithForm>
  );
};

export default SignInModal;
