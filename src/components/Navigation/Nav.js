import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { useContext } from "react";
import signOutDark from "../../images/logout-icon-dark.svg";
import signOutWhite from "../../images/logout-icon-white.svg";

const Nav = () => {
  const { currentPage } = useContext(CurrentPageContext);

  return currentPage === "/" ? (
    <div className="nav">
      <p className="nav__logo">NewsExplorer</p>
      <nav className="nav__links">
        <NavLink
          to="/"
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Home
        </NavLink>
        <button className="nav__button">Sign in</button>
      </nav>
    </div>
  ) : (
    <div className="saved-news__nav">
      <p className="saved-news__nav-logo">NewsExplorer</p>
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
          />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
