import "./SavedNewsHeader.css";
import Nav from "../Navigation/Nav";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedArticlesContext } from "../../contexts/SavedArticles";

const SavedNewsHeader = ({ onSignOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticlesContext);
  console.log(currentUser);
  return (
    <header className="savednews-header">
      <Nav onSignOut={onSignOut} />
      <div className="savednews-header__container">
        <h2 className="savednews-header__title">Saved Articles</h2>
        <p className="savednews-header__greeting">
          {currentUser.name}, you have {savedArticles.length} saved article
          {savedArticles.length !== 1 ? "s" : ""}
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
