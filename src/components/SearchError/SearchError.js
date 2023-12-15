import "./SearchError.css";
import errorImage from "../../images/no-results-icon.svg";

const SearchError = () => {
  return (
    <div className="search-error__container">
      <img
        className="search-error__image"
        src={errorImage}
        alt="frowny face magnefying glass"
      />
      <p className="search-error__title">Server Error</p>
      <p className="search-error__subtitle">
        Sorry, something went wrong during the request. There may be a
        connection issue or the server may be down. Please try again later.
      </p>
    </div>
  );
};

export default SearchError;
