import "./Main.css";
import Header from "../Header/Header";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useContext } from "react";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";

const Main = ({ onSignIn, onSignOut, handleSearch, isLoading }) => {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultsContext);

  console.log(searchResults.length);

  return (
    <main className="main">
      <Header
        onSignIn={onSignIn}
        onSignOut={onSignOut}
        handleSearch={handleSearch}
      />
      <section className="content">
        <div className="content__results">
          {hasSearched && searchResults.length > 0 ? (
            <NewsCardList />
          ) : hasSearched && searchResults.length === 0 ? (
            <NoResults />
          ) : isLoading ? (
            <Preloader />
          ) : (
            ""
          )}
        </div>
      </section>
      <About />
    </main>
  );
};

export default Main;
