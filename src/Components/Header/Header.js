import React from "react";
import Typical from "react-typical";
import "./Header.css";
import profileImg from "../../assets/profileImg.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hey! I am</h1>
        <h2 className="fullname">Md. Sakib Uddin</h2>
        <h2>
          I'm a{" "}
          <Typical
            steps={[
              "Competitive Programmer ♕", 1000,
              "Full Stack Developer 💜", 1000,
              "Programming Trainer ✅", 1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          Passionate about solving problems and building impactful software solutions. With a strong background in competitive programming and full stack development, I aim to deliver high-quality training and robust applications.
        </p>
        <div className="header-payment-container">
          <button>Hire Me</button>
          {/* <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i> */}
        </div>
      </div>

      <div className="profile-img-container">
        <img src={profileImg} alt="Profile Image" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
