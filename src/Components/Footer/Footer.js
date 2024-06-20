import React from "react";
import "./Footer.css"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="footer-copyright">
        <p>© 2024 Sakib Uddin. All Right reserved</p>
      </div>
      {/* {socials} */}
      <div className="footer-social-media">
        <ul>
          <li> 
            <a href="https://www.linkedin.com/in/md-sakib-uddin-076b78194/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/SakiBee">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/SakibUddin12">
              <i className="fa-brands fa-x"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          
          
        </ul>
      </div>
    </footer>
    
  );
};

export default Footer;