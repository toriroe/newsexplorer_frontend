import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="search__form">
      <input
        type="text"
        className="search__form-input"
        id="search-item"
        placeholder="Enter topic"
        required
      />
      <button className="search__form-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
