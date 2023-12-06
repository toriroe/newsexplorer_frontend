import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
      <ModalWithForm />
    </>
  );
}

export default App;
