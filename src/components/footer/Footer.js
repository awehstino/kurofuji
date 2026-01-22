import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">Kuro Fuji</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="http:/www.facebook.com/awehdino/"><FaFacebookF/></a>
        <a href="http:/www.instagram.com/black_fugee"><FiInstagram/></a>
        <a href="http:/www.twitter.com/black_fugee"><IoLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; Kuro Fuji. All rights reserved 2023.
        </small>
      </div>
    </footer>
  )
}

export default Footer