import "./Main.css";
import Header from "../Header/Header";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

const Main = () => {
  return (
    <main className="main">
      <Header />
      <section className="content">
        <div className="content__results">
          <Preloader />
        </div>
      </section>
      <About />
    </main>
  );
};

export default Main;
