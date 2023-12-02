import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
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
  );
};

export default Nav;
