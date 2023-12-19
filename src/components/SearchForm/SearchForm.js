import "./SearchForm.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SearchForm = ({ handleSearch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleError = (errors) => {};

  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSearchSubmit = () => {
    handleSearch({ keyword });
  };

  return (
    <form
      className="search__form"
      onSubmit={handleSubmit(handleSearchSubmit, handleError)}
    >
      <input
        type="text"
        className="search__form-input"
        id="search-item"
        name="keyword"
        placeholder="Enter topic"
        {...register("keyword", { required: "Please enter a keyword" })}
        onChange={handleKeywordChange}
      />
      {errors?.keyword && (
        <p className="search__form-invalid">{errors.keyword.message}</p>
      )}
      <button className="search__form-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
