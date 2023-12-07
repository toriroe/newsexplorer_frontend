import "./Footer.css";
import { Link } from "react-router-dom";
import gitHub from "../../images/github-icon.svg";
import linkedIn from "../../images/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2023 Supersite, Powered by News API</p>

      <div className="footer__links">
        <Link to="/" className="footer__link">
          Home
        </Link>
        <a href="https://tripleten.com/" className="footer__link">
          TripleTen
        </a>
      </div>
      <ul className="footer__icons">
        <li className="footer__icon-item">
          <a href="https://github.com/toriroe">
            <img src={gitHub} className="footer__icon" />
          </a>
        </li>
        <li className="footer__icon-item">
          <a href="https://www.linkedin.com/in/tori-roettger723">
            <img src={linkedIn} className="footer__icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
