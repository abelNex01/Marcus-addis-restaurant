import React, { useRef } from "react";
import "./InternationalDish.css";
import nextBtn from "../../assets/9/next-icon.png";
import backBtn from "../../assets/9/back-icon.png";
import fodsPic1 from "../../assets/11/Inter1.jpg";
import fodsPic2 from "../../assets/11/Inter2.jpg";
import fodsPic3 from "../../assets/11/Inter3.jpg";
import fodsPic4 from "../../assets/11/Inter4.jpg";

const InternationalDish = ({ onClick }) => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="InternationalDish">
      <img
        src={nextBtn}
        style={{ width: "25px" }}
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={backBtn}
        style={{ width: "25px" }}
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <div className="titleofMenu">
          <h4>International Cusines</h4>
          <p>EVERY PLATE TELLS A STORY</p>
        </div>
        <ul className="ulli" ref={slider}>
          <li>
            <div className="sliderss">
              <img src={fodsPic1} />
            </div>
          </li>
          <li>
            <div className="sliderss">
              <img src={fodsPic2} />
            </div>
          </li>
          <li>
            <div className="sliderss">
              <img src={fodsPic3} />
            </div>
          </li>
          <li>
            <div className="sliderss">
              <img src={fodsPic4} />
            </div>
          </li>
        </ul>
      </div>
      <button onClick={onClick}>Close</button>
    </div>
  );
};

export default InternationalDish;
