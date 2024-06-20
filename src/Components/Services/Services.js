import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        <div className="services-desc-container">
          <h1>My Awesome <span>Services</span></h1>
          <p>
            Welcome to my services page! Here you can explore the various professional services I offer. Whether you're looking for web development expertise, competitive programming skills, or personalized CP training, you've come to the right place. Let's work together to bring your projects to life and achieve your goals.
          </p>
          <button>Hire Me</button>
        </div>

        <div className="services-item-container">
        <div className="services-item">
            <i className="fa-solid fa-chalkboard-teacher"></i>
            <div className="item-desc">
              <h3>Your CP Trainer</h3>
              <p>
                Looking for personalized training to boost your competitive programming skills? I provide tailored training sessions that focus on your individual needs, helping you master the concepts and techniques required to succeed in the competitive programming world.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                I specialize in creating stunning and responsive websites that provide an exceptional user experience. From front-end design to back-end development, I ensure that every aspect of your website is crafted with care and attention to detail.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-laptop-code"></i>
            <div className="item-desc">
              <h3>Competitive Programmer</h3>
              <p>
                As a seasoned competitive programmer, I offer my expertise to help you excel in coding competitions. With a deep understanding of algorithms and data structures, I can help you improve your problem-solving skills and achieve higher rankings.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Services;
