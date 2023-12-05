import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = () => {
  return (
    <section className="newscards">
      <h2 className="newscards__title">Search Results</h2>
      <div className="newscards__container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <button className="newscards__button">Show more</button>
    </section>
  );
};

export default NewsCardList;
