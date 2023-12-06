import "./SavedNewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const SavedNewsCardList = () => {
  return (
    <section className="newscards">
      <div className="newscards__container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

export default SavedNewsCardList;
