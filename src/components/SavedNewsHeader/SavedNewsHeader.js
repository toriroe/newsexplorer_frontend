import "./SavedNewsHeader.css";
import Nav from "../Navigation/Nav";

const SavedNewsHeader = ({ onSignOut }) => {
  return (
    <header className="savednews-header">
      <Nav onSignOut={onSignOut} />
      <div className="savednews-header__container">
        <h2 className="savednews-header__title">Saved Articles</h2>
        <p className="savednews-header__greeting">
          Elise, you have 5 saved articles
        </p>
        <p className="savednews-header__keywords">
          By keywords:
          <span className="savednews-header__keywords-list">
            {" "}
            Nature, Yellowstone, and 2 others
          </span>
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
