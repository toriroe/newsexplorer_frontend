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
      {mobileMenuOpen && (
        <MobileMenu onSignIn={onSignIn} onSignOut={onSignOut} />
      )}
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
        <button className="nav__button-loggedin" onClick={onSignOut}>
          <p className="nav__username-loggedin">Username</p>
          <img src={signOutWhite} alt="logout" className="nav__logout" />
        </button>
      </nav>
    </div>
  ) : isLoggedIn && currentPage === "/saved-news" ? (
    <div
      className={`nav__savednews ${
        mobileMenuOpen ? "nav__savednews-open" : ""
      }`}
    >
      <NavLink to="/" className="nav__logo-savednews">
        NewsExplorer
      </NavLink>
      <button
        className="nav__menu-button-savednews"
        onClick={handleMobileMenu}
      />
      {mobileMenuOpen && (
        <MobileMenu onSignIn={onSignIn} onSignOut={onSignOut} />
      )}
      <nav className="nav__links-savednews">
        <NavLink
          exact
          to="/"
          className="nav__link-savednews"
          activeClassName="nav__link-savednews_active"
        >
          Home
        </NavLink>
        <NavLink
          to="/saved-news"
          className="nav__link-savednews"
          activeClassName="nav__link-savednews_active"
        >
          Saved articles
        </NavLink>
        <button className="nav__button-savednews" onClick={onSignOut}>
          <p className="nav__username-savednews">Username</p>
          <img
            src={signOutDark}
            alt="logout"
            className="nav__logout-savednews"
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
      {mobileMenuOpen && (
        <MobileMenu onSignIn={onSignIn} onSignOut={onSignOut} />
      )}
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
