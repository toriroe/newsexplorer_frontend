import "./Search.css";
import SearchForm from "../SearchForm/SearchForm";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="search__subtitle">
        {" "}
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm handleSearch={handleSearch} />
    </div>
  );
};

export default Search;
