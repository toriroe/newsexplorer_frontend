import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();

  /* ------------------------------- Use States ------------------------------- */
  const [currentPage, setCurrentPage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");

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

  return (
    <>
      <CurrentPageContext.Provider value={{ currentPage }}>
        <CurrentUserContext.Provider value={{ isLoggedIn }}>
          <Switch>
            <Route exact path="/">
              <Main onSignIn={handleSignInModal} onSignOut={handleSignOut} />
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
        </CurrentUserContext.Provider>
      </CurrentPageContext.Provider>
    </>
  );
}

export default App;
