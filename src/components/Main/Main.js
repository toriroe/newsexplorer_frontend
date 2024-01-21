import "./Main.css";
import Header from "../Header/Header";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import SearchError from "../SearchError/SearchError";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useContext } from "react";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";

const Main = ({
  onSignIn,
  onSignOut,
  handleSearch,
  isLoading,
  searchError,
  onSaveArticle,
  onRemoveArticle,
  handleRegisterModal,
}) => {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultsContext);

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
            <NewsCardList
              onSaveArticle={onSaveArticle}
              onRemoveArticle={onRemoveArticle}
              handleRegisterModal={handleRegisterModal}
            />
          ) : hasSearched && searchResults.length === 0 ? (
            <NoResults />
          ) : isLoading ? (
            <Preloader />
          ) : searchError === true ? (
            <SearchError />
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
