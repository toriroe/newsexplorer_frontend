import "./MobileMenu.css";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ onClose, onSignIn }) => {
  return (
    <div className="mobile">
      <div className="mobile__content">
        <nav className="mobile__links">
          <NavLink
            to="/"
            className="mobile__link"
            activeClassName="mobile__link_active"
          >
            Home
          </NavLink>
        </nav>
        <button className="mobile__button" onClick={onSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
