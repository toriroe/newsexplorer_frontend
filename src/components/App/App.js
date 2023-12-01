import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader />
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
