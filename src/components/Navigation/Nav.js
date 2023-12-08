import "./Nav.css";
import { NavLink } from "react-router-dom";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { MobileMenuContext } from "../../contexts/MobileMenuContext";
import { useContext } from "react";
import signOutDark from "../../images/logout-icon-dark.svg";
import signOutWhite from "../../images/logout-icon-white.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

const Nav = ({ onSignIn, onSignOut }) => {
  const { currentPage, activeModal } = useContext(CurrentPageContext);
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { mobileMenuOpen, openMobileMenu, closeMobileMenu } =
    useContext(MobileMenuContext);

  console.log(mobileMenuOpen);

  const handleMobileMenu = () => {
    if (mobileMenuOpen === false) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  };

  return isLoggedIn && currentPage === "/" ? (
    <div className={`nav ${mobileMenuOpen === true ? "nav_menu-open" : ""}`}>
      <NavLink to="/" className="nav__logo">
        NewsExplorer
      </NavLink>
      <button
        className={`nav__menu-button ${
          mobileMenuOpen === true ? "nav__menu-button_open" : ""
        }`}
        onClick={handleMobileMenu}
      />
      {mobileMenuOpen && <MobileMenu onSignIn={onSignIn} />}
      <nav className="nav__links">
        <NavLink
          to="/"
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Home
        </NavLink>
        <NavLink to="/saved-news" className="nav__link-news">
          Saved articles
        </NavLink>
        <button className="nav__button-loggedin">
          <p className="nav__username-loggedin">Username</p>
          <img
            src={signOutWhite}
            alt="logout"
            className="nav__logout"
            onClick={onSignOut}
          />
        </button>
      </nav>
    </div>
  ) : isLoggedIn && currentPage === "/saved-news" ? (
    <div className="saved-news__nav">
      <NavLink to="/" className="saved-news__nav-logo">
        NewsExplorer
      </NavLink>
      <button className="saved-news__menu-button" onClick={handleMobileMenu} />
      {mobileMenuOpen && <MobileMenu onSignIn={onSignIn} />}
      <nav className="saved-news__nav-links">
        <NavLink
          exact
          to="/"
          className="saved-news__nav-link"
          activeClassName="saved-news__nav-link_active"
        >
          Home
        </NavLink>
        <NavLink
          to="/saved-news"
          className="saved-news__nav-link"
          activeClassName="saved-news__nav-link_active"
        >
          Saved articles
        </NavLink>
        <button className="saved-news__nav-button">
          <p className="saved-news__nav-username">Username</p>
          <img
            src={signOutDark}
            alt="logout"
            className="saved-news__nav-logout"
            onClick={onSignOut}
          />
        </button>
      </nav>
    </div>
  ) : (
    <div className={`nav ${mobileMenuOpen === true ? "nav_menu-open" : ""}`}>
      <NavLink
        to="/"
        className={`nav__logo ${activeModal !== "" ? "nav__logo_hidden" : ""}`}
      >
        NewsExplorer
      </NavLink>
      <button
        className={`nav__menu-button ${
          activeModal !== "" ? "nav__menu-button_hidden" : ""
        } ${mobileMenuOpen === true ? "nav__menu-button_open" : ""}`}
        onClick={handleMobileMenu}
      />
      {mobileMenuOpen && <MobileMenu onSignIn={onSignIn} />}
      <nav className="nav__links">
        <NavLink
          to="/"
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Home
        </NavLink>
        <button className="nav__button" onClick={onSignIn}>
          Sign in
        </button>
      </nav>
    </div>
  );
};

export default Nav;
