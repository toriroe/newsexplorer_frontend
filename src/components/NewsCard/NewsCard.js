import "./NewsCard.css";
import cardImage from "../../images/card-example-image.png";

const NewsCard = () => {
  return (
    <div className="card">
      <button className="card__button-bookmark" />
      <img className="card__image" src={cardImage} />
      <div className="card__description">
        <p className="card__date">February 19th, 2019</p>
        <h3 className="card__title">Nature makes you better</h3>
        <p className="card__text">
          We all know how good nature can make us feel. We have known it for
          millennia: the sound of the ocean, the scents of a forest, the way
          dappled sunlight dances through leaves.
        </p>
        <p className="card__source">NATIONAL GEOGRAPHIC</p>
      </div>
    </div>
  );
};

export default NewsCard;
