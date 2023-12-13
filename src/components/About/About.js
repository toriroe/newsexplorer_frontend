import "./About.css";
import aboutImage from "../../images/about-image.png";

const About = () => {
  return (
    <section className="about">
      <img className="about__image" alt="Tori" src={aboutImage} />
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Tori is an aspiring Fullstack Developer with knowledge of HTML, CSS,
          Vanilla JS, ReactJS, MongoDB, NodeJS, ExpressJS, and Google Cloud
          Platform.
        </p>
        <p className="about__description">
          She was able to learn and gain experience using the technologies
          listed during her time as a student in Tripleten's software
          engineering program. There, she had the opportunity to complete
          several different projects, culminating in this final, full-stack
          application.
        </p>
      </div>
    </section>
  );
};

export default About;
