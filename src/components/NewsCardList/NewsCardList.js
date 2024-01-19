import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useContext, useState } from "react";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";

const NewsCardList = ({ onSaveArticle, onRemoveArticle }) => {
  const [cardsDisplayed, setCardsDisplayed] = useState(3);
  const { searchResults } = useContext(SearchResultsContext);
  const { hasSearched } = useContext(HasSearchedContext);

  const increaseCardsVisible = () => {
    setCardsDisplayed(cardsDisplayed + 3);
  };

  return (
    <section className="newscards">
      {hasSearched ? (
        <>
          <h2 className="newscards__title">Search Results</h2>
          <div className="newscards__container">
            {searchResults.slice(0, cardsDisplayed).map((result) => {
              return (
                <NewsCard
                  newsData={result}
                  key={result.url}
                  onSaveArticle={onSaveArticle}
                  onRemoveArticle={onRemoveArticle}
                />
              );
            })}
          </div>
          <button
            className={`newscards__button ${
              cardsDisplayed >= searchResults.length
                ? "newscards__button_hidden"
                : ""
            }`}
            onClick={increaseCardsVisible}
          >
            Show more
          </button>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default NewsCardList;
