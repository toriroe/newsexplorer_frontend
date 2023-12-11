import "./Header.css";
import Nav from "../Navigation/Nav";
import Search from "../Search/Search";

const Header = ({ onSignIn, onSignOut, handleSearch }) => {
  return (
    <header className="header">
      <Nav onSignIn={onSignIn} onSignOut={onSignOut} />
      <Search handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
