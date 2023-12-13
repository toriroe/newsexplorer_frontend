import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignInModal = ({ onClose, handleLogIn, onAltClick }) => {
  //   const [email, setEmail] = useState("");
  //   const handleEmailChange = (evt) => {
  //     setEmail(evt.target.value);
  //   };

  //   const [password, setPassword] = useState("");
  //   const handlePasswordChange = (evt) => {
  //     setPassword(evt.target.value);
  //   };

  //   const handleSubmit = (evt) => {
  //     evt.preventDefault();
  //     handleLogIn({ email, password });
  //   };

  return (
    <ModalWithForm
      title="Sign in"
      onClose={onClose}
      buttonText="Sign in"
      altButtonText="Sign up"
      onAltClick={onAltClick}
      //   onSubmit={handleSubmit}
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
            // value={email}
            // onChange={handleEmailChange}
          />
        </label>
        <label>
          <p className="modal__input-title">Password</p>
          <input
            className="modal__form-input"
            type="password"
            name="password"
            placeholder="Password"
            minLength="1"
            required
            // value={password}
            // onChange={handlePasswordChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default SignInModal;
