import "./SavedNewsHeader.css";
import Nav from "../Navigation/Nav";

const SavedNewsHeader = ({ onSignOut }) => {
  return (
    <header className="saved-news__header">
      <Nav onSignOut={onSignOut} />
      <div className="saved-news__header-container">
        <h2 className="saved-news__header-title">Saved Articles</h2>
        <p className="saved-news__header-greeting">
          Elise, you have 5 saved articles
        </p>
        <p className="saved-news__header-keywords">
          By keywords:
          <span className="saved-news__header-keywords-list">
            {" "}
            Nature, Yellowstone, and 2 others
          </span>
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
