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
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import { getSearchResults, parseSearchResults } from "../../utils/NewsApi";

function App() {
  /* ------------------------------- Use States ------------------------------- */
  const [currentPage, setCurrentPage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
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

  const handleSuccessModal = () => {
    setActiveModal("success");
  };

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

  const handleSearch = ({ searchQ }) => {
    getSearchResults(searchQ)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <CurrentPageContext.Provider value={{ currentPage, activeModal }}>
        <CurrentUserContext.Provider value={{ isLoggedIn }}>
          <MobileMenuContext.Provider
            value={{ mobileMenuOpen, openMobileMenu, closeMobileMenu }}
          >
            <Switch>
              <Route exact path="/">
                <Main
                  onSignIn={handleSignInModal}
                  onSignOut={handleSignOut}
                  handleSearch={handleSearch}
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
              />
            )}
            {activeModal === "register" && (
              <RegisterModal
                onClose={handleCloseModal}
                onAltClick={handleAltClick}
              />
            )}
            {activeModal === "success" && (
              <SuccessModal
                onClose={handleCloseModal}
                onAltClick={handleAltClick}
              />
            )}
          </MobileMenuContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentPageContext.Provider>
    </>
  );
}

export default App;
