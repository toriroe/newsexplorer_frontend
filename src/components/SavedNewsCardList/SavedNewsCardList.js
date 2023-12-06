import "./SavedNewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const SavedNewsCardList = () => {
  return (
    <section className="saved-news__newscards">
      <div className="saved-news__newscards-container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

export default SavedNewsCardList;
