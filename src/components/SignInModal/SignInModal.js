import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useForm";

const SignInModal = ({
  onClose,
  onSignIn,
  onAltClick,
  isLoading,
  serverError,
}) => {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({ email: "", password: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignIn(values);
  };

  return (
    <ModalWithForm
      name="signin"
      title="Sign in"
      onClose={onClose}
      buttonText={isLoading ? "Loading..." : "Sign in"}
      altButtonText="Sign up"
      onAltClick={onAltClick}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <div className="modal__form-content">
        <label className="modal__input">
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
          <span className="modal__error">
            {errors.email} {""}
          </span>
        </label>

        <label className="modal__input">
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
          <span className="modal__error">{errors.password}</span>
        </label>
        {serverError && (
          <span className="modal__error-unavailable">
            Incorrect email or password
          </span>
        )}
      </div>
    </ModalWithForm>
  );
};

export default SignInModal;
