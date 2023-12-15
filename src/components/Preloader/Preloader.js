import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="circle-preloader__container">
      <div className="circle-preloader"></div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
};

export default Preloader;
