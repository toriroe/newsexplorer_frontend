import "./Nav.css";
import { NavLink } from "react-router-dom";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import signOutDark from "../../images/logout-icon-dark.svg";
import signOutWhite from "../../images/logout-icon-white.svg";

const Nav = ({ onSignIn, onSignOut }) => {
  const { currentPage } = useContext(CurrentPageContext);
  const { isLoggedIn } = useContext(CurrentUserContext);

  return isLoggedIn && currentPage === "/" ? (
    <div className="nav">
      <NavLink to="/" className="nav__logo">
        NewsExplorer
      </NavLink>
      <button className="nav__menu-button" />
      <nav className="nav__links nav__links_hidden">
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
      <button className="nav__menu-button" />
      <nav className="saved-news__nav-links nav__links_hidden">
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
    <div className="nav">
      <NavLink to="/" className="nav__logo">
        NewsExplorer
      </NavLink>
      <button className="nav__menu-button" />
      <nav className="nav__links nav__links_hidden">
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
