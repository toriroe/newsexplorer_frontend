import "./NewsCard.css";
import defaultCardImage from "../../images/header-image.png";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { KeywordContext } from "../../contexts/KeywordContext";
import { useContext, useState } from "react";

const NewsCard = ({ newsData, onSaveArticle }) => {
  const { currentPage } = useContext(CurrentPageContext);
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { keyword } = useContext(KeywordContext);

  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const formattedDate = new Date(newsData.publishedAt).toLocaleString(
    "default",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const changeBookmarkImage = () => {
    if (isBookmarked) {
      return setIsBookmarked(false);
    }
    setIsBookmarked(true);
  };

  const handleBookmarkClick = () => {
    const token = localStorage.getItem("jwt");
    changeBookmarkImage();
    onSaveArticle({ newsData, keyword, token });
  };

  return isLoggedIn && currentPage === "/" ? (
    <div className="card">
      <button
        className={`card__button-bookmark ${
          isBookmarked ? "card__button-bookmark_marked" : ""
        }`}
        onClick={handleBookmarkClick}
      />
      <img
        className="card__image"
        src={newsData.urlToImage || defaultCardImage}
        alt={newsData.url}
      />
      <div className="card__description">
        <div className="card__description-container">
          <p className="card__date">{formattedDate}</p>
          <h3 className="card__title">{newsData.title}</h3>
          <p className="card__text">{newsData.description}</p>
        </div>
        <p className="card__source">{newsData.source.name.toUpperCase()}</p>
      </div>
    </div>
  ) : isLoggedIn && currentPage === "/saved-news" ? (
    <div className="card">
      <div className="card__keyword">Nature</div>
      <div
        className={`card__popup-text ${
          isHovered ? "" : "card__popup-text_hidden"
        }`}
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
      <img
        className="card__image"
        src={newsData.urlToImage || defaultCardImage}
        alt={newsData.url}
      />
      <div className="card__description">
        <div className="card__description-container">
          <p className="card__date">{formattedDate}</p>
          <h3 className="card__title">{newsData.title}</h3>
          <p className="card__text">{newsData.description}</p>
        </div>
        <p className="card__source">{newsData.source.name.toUpperCase()}</p>
      </div>
    </div>
  ) : (
    <div className="card">
      <div
        className={`card__popup-text ${
          isHovered ? "" : "card__popup-text_hidden"
        }`}
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
      <img
        className="card__image"
        src={newsData.urlToImage || defaultCardImage}
        alt={newsData.url}
      />
      <div className="card__description">
        <div className="card__description-container">
          <p className="card__date">{formattedDate}</p>
          <h3 className="card__title">{newsData.title}</h3>
          <p className="card__text">{newsData.description}</p>
        </div>
        <p className="card__source">{newsData.source.name.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default NewsCard;
