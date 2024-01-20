import "./NewsCard.css";
import defaultCardImage from "../../images/header-image.png";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { KeywordContext } from "../../contexts/KeywordContext";
import { SavedArticlesContext } from "../../contexts/SavedArticles";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const NewsCard = ({
  newsData,
  onSaveArticle,
  onRemoveArticle,
  handleRegisterModal,
}) => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { keyword } = useContext(KeywordContext);
  const { savedArticles } = useContext(SavedArticlesContext);

  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  const formattedDate = new Date(
    newsData.publishedAt || newsData.date
  ).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleBookmarkClick = () => {
    const token = localStorage.getItem("jwt");
    onSaveArticle({ newsData, keyword, token });
  };

  const handleRemoveClick = () => {
    const token = localStorage.getItem("jwt");
    onRemoveArticle({ newsData, token });
  };

  console.log({ newsData: newsData });

  return (
    <div className="card">
      {currentPage === "/saved-news" && (
        <>
          <div className="card__keyword">{newsData.keyword}</div>
          <div
            className={`card__popup-text ${
              isHovered ? "" : "card__popup-text_hidden"
            }`}
          >
            Remove from saved
          </div>
          <button
            className="card__button-delete"
            onClick={handleRemoveClick}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          />
        </>
      )}

      {isLoggedIn && currentPage === "/" ? (
        <button
          className={`card__button-bookmark ${
            savedArticles.some(
              (savedArticle) => savedArticle.link === newsData.url
            )
              ? "card__button-bookmark_marked"
              : ""
          }`}
          onClick={handleBookmarkClick}
        />
      ) : (
        ""
      )}
      {!isLoggedIn && (
        <>
          <div
            className={`card__popup-text ${
              isHovered ? "" : "card__popup-text_hidden"
            }`}
          >
            Sign in to save articles
          </div>
          <button
            className="card__button-bookmark"
            onClick={handleRegisterModal}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          />
        </>
      )}
      <img
        className="card__image"
        src={newsData.image || newsData.urlToImage || defaultCardImage}
        alt={newsData.link || newsData.url}
      />
      <div className="card__description">
        <div className="card__description-container">
          <p className="card__date">{formattedDate}</p>
          <h3 className="card__title">{newsData.title}</h3>
          <p className="card__text">{newsData.text || newsData.description}</p>
        </div>
        <p className="card__source">
          {newsData.source.name || newsData.source}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
