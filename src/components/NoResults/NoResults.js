import "./NoResults.css";
import NoResultsIcon from "../../images/no-results-icon.svg";

const NoResults = () => {
  return (
    <div className="noresults__container">
      <img
        className="noresults__image"
        src={NoResultsIcon}
        alt="frowny face magnefying glass"
      />
      <p className="noresults__title">Nothing found</p>
      <p className="noresults__subtitle">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NoResults;
