import "./App.css";

/* ---------------------------------- React --------------------------------- */

import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

/* ------------------------------- Components ------------------------------- */

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";
import SuccessModal from "../SuccessModal/SuccessModal";

/* -------------------------------- Contexts -------------------------------- */

import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { MobileMenuContext } from "../../contexts/MobileMenuContext";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";
import { KeywordContext } from "../../contexts/KeywordContext";
import { SavedArticlesContext } from "../../contexts/SavedArticles";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

/* ------------------------------ Other Imports ----------------------------- */

import { getSearchResults } from "../../utils/NewsApi";
import { register, signIn, getContent } from "../../utils/auth";
import {
  getSavedArticles,
  addSavedArticle,
  removeSavedArticle,
} from "../../utils/MainApi";

function App() {
  /* ------------------------------- Use States ------------------------------- */
  const [currentPage, setCurrentPage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedArticles, setSavedArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [serverError, setServerError] = useState(false);

  const location = useLocation();

  /* ------------------------------- Use Effects ------------------------------ */

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getContent(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setIsLoggedIn(true);
          }
        })
        .then(() => {
          getSavedArticles(jwt).then((articles) => {
            setSavedArticles(articles);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  /* ----------------------------- Modal Handlers ----------------------------- */
  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then(() => {
        if (activeModal === "register") {
          handleSuccessModal();
        } else {
          handleCloseModal();
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleSignInModal = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    setActiveModal("signin");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleSuccessModal = () => {
    setActiveModal("success");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  /* ----------------------------- Authorization Handlers ----------------------------- */

  const handleSignOut = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    setCurrentUser({});
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  const handleSignIn = (values) => {
    const makeRequest = () => {
      return signIn(values).then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
        localStorage.setItem("jwt", user.token);
      });
    };
    handleSubmit(makeRequest);
  };

  const handleRegister = (values) => {
    const makeRequest = () => {
      return register(values)
        .then((user) => {
          if (user) {
            setServerError(false);
          }
        })
        .catch((err) => {
          setServerError(true);
        });
    };
    handleSubmit(makeRequest);
  };

  /* ---------------------------- Article handlers ---------------------------- */

  const handleSaveArticle = ({ newsData, keyword, token }) => {
    if (!savedArticles.some((article) => article.link === newsData.url)) {
      addSavedArticle(newsData, keyword, token)
        .then((data) => {
          setSavedArticles([data.data, ...savedArticles]);
          const savedArticleId = data.data._id;
          const newArticle = { ...newsData, _id: savedArticleId };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
          console.log(newSearchResults);
        })
        .catch((err) => console.error(err));
    } else if (savedArticles.some((article) => article.link === newsData.url)) {
      removeSavedArticle(newsData, token)
        .then(() => {
          const unsaveNewsArticles = savedArticles.filter(
            (article) => article._id !== newsData._id
          );
          setSavedArticles(unsaveNewsArticles);

          const newArticle = { ...newsData, _id: "" };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    }
  };

  const handleRemoveArticle = ({ newsData, token }) => {
    removeSavedArticle(newsData, token)
      .then(() => {
        const unsaveNewsArticles = savedArticles.filter(
          (article) => article._id !== newsData._id
        );
        setSavedArticles(unsaveNewsArticles);
      })
      .catch((err) => console.error(err));
  };

  /* ----------------------------- Other handlers ----------------------------- */

  const handleAltClick = () => {
    if (activeModal === "signin") {
      handleCloseModal();
      handleRegisterModal();
    } else {
      handleCloseModal();
      handleSignInModal();
    }
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSearch = ({ keyword }) => {
    setKeyword(keyword);
    setIsSearching(true);
    getSearchResults(keyword)
      .then((res) => {
        setSearchResults(res.articles);
        setHasSearched(true);
        setIsSearching(false);
        setSearchError(false);
      })
      .catch((err) => {
        console.error(err);
        setIsSearching(false);
        setSearchError(true);
      });
  };

  return (
    <CurrentPageContext.Provider
      value={{ currentPage, setCurrentPage, activeModal }}
    >
      <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
        <HasSearchedContext.Provider value={{ hasSearched }}>
          <SearchResultsContext.Provider value={{ searchResults }}>
            <SavedArticlesContext.Provider
              value={{ savedArticles, setSavedArticles }}
            >
              <MobileMenuContext.Provider
                value={{ mobileMenuOpen, openMobileMenu, closeMobileMenu }}
              >
                <KeywordContext.Provider value={{ keyword, setKeyword }}>
                  <Switch>
                    <Route exact path="/">
                      <Main
                        onSignIn={handleSignInModal}
                        onSignOut={handleSignOut}
                        handleSearch={handleSearch}
                        isLoading={isSearching}
                        searchError={searchError}
                        onSaveArticle={handleSaveArticle}
                        onRemoveArticle={handleRemoveArticle}
                        handleRegisterModal={handleRegisterModal}
                      />
                    </Route>
                    <ProtectedRoute path="/saved-news">
                      <SavedNews
                        onSignOut={handleSignOut}
                        onRemoveArticle={handleRemoveArticle}
                      />
                    </ProtectedRoute>
                  </Switch>
                  <Footer />
                  {activeModal === "signin" && (
                    <SignInModal
                      onClose={handleCloseModal}
                      onAltClick={handleAltClick}
                      onSignIn={handleSignIn}
                      isLoading={isLoading}
                    />
                  )}
                  {activeModal === "register" && (
                    <RegisterModal
                      onClose={handleCloseModal}
                      onAltClick={handleAltClick}
                      onRegister={handleRegister}
                      isLoading={isLoading}
                      serverError={serverError}
                    />
                  )}
                  {activeModal === "success" && (
                    <SuccessModal
                      onClose={handleCloseModal}
                      onAltClick={handleSignInModal}
                    />
                  )}
                </KeywordContext.Provider>
              </MobileMenuContext.Provider>
            </SavedArticlesContext.Provider>
          </SearchResultsContext.Provider>
        </HasSearchedContext.Provider>
      </CurrentUserContext.Provider>
    </CurrentPageContext.Provider>
  );
}

export default App;
