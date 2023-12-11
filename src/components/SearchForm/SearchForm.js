import "./SearchForm.css";
import { useState } from "react";

const SearchForm = ({ handleSearch }) => {
  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSearchSubmit = (evt) => {
    evt.preventDefault();
    handleSearch({ keyword });
  };

  return (
    <form className="search__form" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        className="search__form-input"
        id="search-item"
        placeholder="Enter topic"
        required
        onChange={handleKeywordChange}
      />
      <button className="search__form-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
