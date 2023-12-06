import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();

  /* ------------------------------- Use States ------------------------------- */
  const [currentPage, setCurrentPage] = useState("");

  /* ------------------------------- Use Effects ------------------------------ */

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  console.log(currentPage);

  return (
    <>
      <CurrentPageContext.Provider value={{ currentPage }}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/saved-news">
            <SavedNews />
          </Route>
        </Switch>
        <Footer />
      </CurrentPageContext.Provider>
    </>
  );
}

export default App;
