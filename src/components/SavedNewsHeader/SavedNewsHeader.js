import "./SavedNewsHeader.css";
import Nav from "../Navigation/Nav";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedArticlesContext } from "../../contexts/SavedArticles";

const SavedNewsHeader = ({ onSignOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticlesContext);

  const userArticles = savedArticles.filter(
    (article) => article.owner === currentUser._id
  );

  const keywordArray = userArticles.map((article) => article.keyword);
  console.log(keywordArray);

  const getKeywordString = (keywords) => {
    if (keywordArray.length === 1) {
      return `${keywordArray}`;
    }
    if (keywordArray.length > 1) {
      const count = {};
      for (let keyword of keywords) {
        if (count[keyword]) {
          count[keyword]++;
        } else {
          count[keyword] = 1;
        }
      }

      const sortedKeywordArray = [];
      for (const item in count) {
        sortedKeywordArray.push([item, count[item]]);
      }
      sortedKeywordArray.sort((a, b) => {
        return b[1] - a[1];
      });

      if (sortedKeywordArray.length === 1) {
        return `${sortedKeywordArray[0][0]}`;
      } else if (sortedKeywordArray.length === 2) {
        return `${sortedKeywordArray[0][0]} and ${sortedKeywordArray[1][0]}`;
      } else {
        return `${sortedKeywordArray[0][0]}, ${sortedKeywordArray[1][0]}, and ${
          sortedKeywordArray.length - 2
        } more`;
      }
    } else {
      return null;
    }
  };

  const keywordString = getKeywordString(keywordArray);

  return (
    <header className="savednews-header">
      <Nav onSignOut={onSignOut} />
      <div className="savednews-header__container">
        <h2 className="savednews-header__title">Saved Articles</h2>
        <p className="savednews-header__greeting">
          {currentUser.name}, you have {userArticles.length} saved article
          {userArticles.length !== 1 ? "s" : ""}
        </p>
        <p className="savednews-header__keywords">
          By keywords:
          <span className="savednews-header__keywords-list">
            {" "}
            {keywordString}
          </span>
        </p>
      </div>
    </header>
  );
};

export default SavedNewsHeader;
