import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useContext, useState } from "react";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";

const NewsCardList = () => {
  const [cardsVisibleAmount, setCardsVisibleAmount] = useState(3);
  const { searchResults } = useContext(SearchResultsContext);

  const increaseCardsVisible = () => {
    setCardsVisibleAmount(cardsVisibleAmount + 3);
  };

  return (
    <section className="newscards">
      <h2 className="newscards__title">Search Results</h2>
      <div className="newscards__container">
        {searchResults.slice(0, cardsVisibleAmount).map((result) => {
          return <NewsCard newsData={result} key={result.url} />;
        })}
      </div>
      <button className="newscards__button" onClick={increaseCardsVisible}>
        Show more
      </button>
    </section>
  );
};

export default NewsCardList;
