import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ onClose, handleSignUp, onAltClick }) => {
  //   const [email, setEmail] = useState("");
  //   const handleEmailChange = (evt) => {
  //     setEmail(evt.target.value);
  //   };

  //   const [password, setPassword] = useState("");
  //   const handlePasswordChange = (evt) => {
  //     setPassword(evt.target.value);
  //   };

  //   const [username, setUsername] = useState("");
  //   const handleUsernameChange = (evt) => {
  //     setUserame(evt.target.value);
  //   };

  //   const handleSubmit = (evt) => {
  //     evt.preventDefault();
  //     handleSignUp({ username, email, password });
  //   };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={onClose}
      buttonText="Sign up"
      altButtonText="Sign in"
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
            placeholder="Enter email"
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
            placeholder="Enter password"
            required
            // value={password}
            // onChange={handlePasswordChange}
          />
        </label>
        <label>
          <p className="modal__input-title">Username</p>
          <input
            className="modal__form-input"
            type="text"
            name="username"
            minLength="1"
            maxLength="30"
            placeholder="Enter your username"
            required
            // value={username}
            // onChange={handleUsernameChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
