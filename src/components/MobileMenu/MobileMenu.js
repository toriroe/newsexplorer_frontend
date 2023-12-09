import "./MobileMenu.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import signOutDark from "../../images/logout-icon-dark.svg";
import signOutWhite from "../../images/logout-icon-white.svg";

const MobileMenu = ({ onSignIn, onSignOut }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { currentPage } = useContext(CurrentPageContext);

  return isLoggedIn && currentPage === "/" ? (
    <div className="mobile">
      <div className="mobile__content">
        <nav className="mobile__links">
          <NavLink to="/" className="mobile__link">
            Home
          </NavLink>
          <NavLink to="/saved-news" className="mobile__link">
            Saved articles
          </NavLink>
        </nav>
        <button className="mobile__button-loggedin">
          <p className="mobile__username-loggedin">Username</p>
          <img
            src={signOutWhite}
            alt="logout"
            className="mobile__logout"
            onClick={onSignOut}
          />
        </button>
      </div>
    </div>
  ) : isLoggedIn && currentPage === "/saved-news" ? (
    <div className="mobile">
      <div className="saved-news__mobile-content">
        <nav className="mobile__links">
          <NavLink to="/" className="saved-news__mobile-link">
            Home
          </NavLink>
          <NavLink to="/saved-news" className="saved-news__mobile-link">
            Saved articles
          </NavLink>
        </nav>
        <button className="saved-news__mobile-button">
          <p className="saved-news__mobile-username">Username</p>
          <img
            src={signOutDark}
            alt="logout"
            className="mobile__logout"
            onClick={onSignOut}
          />
        </button>
      </div>
    </div>
  ) : (
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
