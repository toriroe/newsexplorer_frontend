import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useContext } from "react";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";

const NewsCardList = () => {
  const { searchResults } = useContext(SearchResultsContext);
  return (
    <section className="newscards">
      <h2 className="newscards__title">Search Results</h2>
      <div className="newscards__container">
        {searchResults.map((result) => {
          return <NewsCard newsData={result} key={result.url} />;
        })}
      </div>
      <button className="newscards__button">Show more</button>
    </section>
  );
};

export default NewsCardList;
