import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <Search />
    </header>
  );
};

export default Header;
