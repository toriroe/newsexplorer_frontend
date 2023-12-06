import "./Header.css";
import Nav from "../Navigation/Nav";
import Search from "../Search/Search";

const Header = (isLoggedIn) => {
  return (
    <header className="header">
      <Nav />
      <Search />
    </header>
  );
};

export default Header;
