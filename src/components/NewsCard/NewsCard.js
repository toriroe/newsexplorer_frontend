import "./NewsCard.css";
import cardImage from "../../images/card-example-image.png";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useState } from "react";

const NewsCard = () => {
  const { currentPage } = useContext(CurrentPageContext);
  const { isLoggedIn } = useContext(CurrentUserContext);

  const [isHovered, setIsHovered] = useState(false);

  return isLoggedIn && currentPage === "/" ? (
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
  ) : currentPage === "/" ? (
    <div className="card">
      <div
        className={isHovered ? "card__popup-text" : "card__popup-text_hidden"}
      >
        Sign in to save articles
      </div>
      <button
        className="card__button-bookmark"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      />
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
  ) : (
    <div className="card">
      <div className="card__keyword">Nature</div>
      <div
        className={isHovered ? "card__popup-text" : "card__popup-text_hidden"}
      >
        Remove from saved
      </div>
      <button
        className="card__button-delete"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      />
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
