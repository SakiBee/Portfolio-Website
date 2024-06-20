import React from "react";
import "./Works.css"
import w1 from "../../assets/w1.jpg"
import w2 from "../../assets/w2.jpg"
import w3 from "../../assets/w3.jpg"
import w4 from "../../assets/w4.jpg"
import w5 from "../../assets/w5.jpg"
import w6 from "../../assets/w6.jpg"


const Works = () => {
  return (
    <div className="works-container">
      <h1>My Recent Works</h1>
      <div className="works-list-container">
        <div className="works-item">
          <a href="#">
            <img src={w1} alt="Project Photo 1"/>
          </a>
        </div>
        <div className="works-item">
          <a href="#">
            <img src={w2} alt="Project Photo 2"/>
          </a>
        </div>
        <div className="works-item">
          <a href="#">
            <img src={w3} alt="Project Photo 3"/>
          </a>
        </div>
        <div className="works-item">
          <a href="#">
            <img src={w4} alt="Project Photo 4"/>
          </a>
        </div>
        <div className="works-item">
          <a href="#">
            <img src={w5} alt="Project Photo 5"/>
          </a>
        </div>
        <div className="works-item">
          <a href="#">
            <img src={w6} alt="Project Photo 6"/>
          </a>
        </div>
      </div>
    </div>
  );
};


export default Works;