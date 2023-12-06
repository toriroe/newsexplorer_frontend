import "./Header.css";
import Nav from "../Navigation/Nav";
import Search from "../Search/Search";

const Header = ({ onSignIn, onSignOut }) => {
  return (
    <header className="header">
      <Nav onSignIn={onSignIn} onSignOut={onSignOut} />
      <Search />
    </header>
  );
};

export default Header;
