import React, { useRef } from "react";
import "./Testimonials.css";
import nextBtn from "../../assets/9/next-icon.png";
import backBtn from "../../assets/9/back-icon.png";
import user1 from "../../assets/9/user-1.png";
import user2 from "../../assets/9/user-2.png";
import user3 from "../../assets/9/user-3.png";
import user4 from "../../assets/9/user-4.png";

const Testimonials = () => {
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
    <div className="testimonials">
      {/* <div className="testimonialTitle">
        <h1>Customer Testimonial's</h1>
        <h4>BE OUR NUMBER 1 CUSTOMER</h4>
      </div> */}

      <img src={nextBtn} className="next-btn" onClick={slideForward} />
      <img src={backBtn} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} />
                <div>
                  <h3>Zewditu Tekle</h3>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <p className="paragraphText">
                "Marcus Addis Restaurant is a culinary gem! From the warm
                ambiance to the exquisite flavors, every visit is a delight.
                Marcus's attention to detail is evident in every dish, leaving
                me wanting more every time. It's a must-visit for anyone who
                appreciates fine dining."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} />
                <div>
                  <h3>Tewodros Alemayehu</h3>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <p className="paragraphText">
                "The fusion of flavors in each dish is simply outstanding.
                Marcus has created a menu that caters to every palate, and his
                commitment to quality ingredients shines through in every bite.
                It's become my go-to spot for special occasions and casual
                dining alike."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} />
                <div>
                  <h3>Abeba Gebremedhin</h3>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <p className="paragraphText">
                "Marcus Addis Restaurant exceeded all my expectations. The
                service was impeccable, and the food was nothing short of
                exceptional. Marcus's innovative approach to traditional dishes
                is refreshing, and it's evident that each plate is crafted with
                passion and expertise."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} />
                <div>
                  <h3>Mekonnen Tadesse</h3>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <p className="paragraphText">
                "From the moment you step through the door, you're greeted with
                warmth and hospitality. The menu offers a tantalizing array of
                options, and each dish is a work of art. Marcus's commitment to
                excellence is evident in every aspect of the dining experience."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
