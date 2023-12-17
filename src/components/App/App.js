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
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

/* ------------------------------ Other Imports ----------------------------- */

import { getSearchResults } from "../../utils/NewsApi";
import { register, signIn, getContent } from "../../utils/auth";

function App() {
  /* ------------------------------- Use States ------------------------------- */
  const [currentPage, setCurrentPage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const location = useLocation();

  /* ------------------------------- Use Effects ------------------------------ */

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleClickClose = (evt) => {
      if (evt.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleClickClose);
    };
  }, [activeModal]);

  /* ----------------------------- Modal Handlers ----------------------------- */

  const handleSignInModal = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    setActiveModal("signin");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  // const handleSuccessModal = () => {
  //   setActiveModal("success");
  // };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  /* ----------------------------- Other Handlers ----------------------------- */

  const handleSignOut = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }

    setIsLoggedIn(false);
  };

  // const handleSignIn = (values) => {
  //   console.log(values);
  //   handleCloseModal();
  // };

  // const handleRegister = (values) => {
  //   console.log(values);
  //   register(values)
  //     .then((user) => {
  //       setIsLoggedIn(true);
  //       setCurrentUser(user);
  //       handleCloseModal();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  //     .finally(() => console.log(currentUser));
  // };

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
    setIsLoading(true);
    getSearchResults(keyword)
      .then((res) => {
        console.log(res);
        setSearchResults(res.articles);
        setHasSearched(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setServerError(true);
      });
  };

  return (
    <>
      <CurrentPageContext.Provider value={{ currentPage, activeModal }}>
        <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
          <HasSearchedContext.Provider value={{ hasSearched }}>
            <SearchResultsContext.Provider value={{ searchResults }}>
              <MobileMenuContext.Provider
                value={{ mobileMenuOpen, openMobileMenu, closeMobileMenu }}
              >
                <Switch>
                  <Route exact path="/">
                    <Main
                      onSignIn={handleSignInModal}
                      onSignOut={handleSignOut}
                      handleSearch={handleSearch}
                      isLoading={isLoading}
                      serverError={serverError}
                    />
                  </Route>
                  <ProtectedRoute path="/saved-news">
                    <SavedNews onSignOut={handleSignOut} />
                  </ProtectedRoute>
                </Switch>
                <Footer />
                {activeModal === "signin" && (
                  <SignInModal
                    onClose={handleCloseModal}
                    onAltClick={handleAltClick}
                    onSignIn={handleSignIn}
                  />
                )}
                {activeModal === "register" && (
                  <RegisterModal
                    onClose={handleCloseModal}
                    onAltClick={handleAltClick}
                    onRegister={handleRegister}
                  />
                )}
                {activeModal === "success" && (
                  <SuccessModal
                    onClose={handleCloseModal}
                    onAltClick={handleAltClick}
                  />
                )}
              </MobileMenuContext.Provider>
            </SearchResultsContext.Provider>
          </HasSearchedContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentPageContext.Provider>
    </>
  );
}

export default App;
