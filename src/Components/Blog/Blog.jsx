import React, { useState } from "react";
import "./Blog.css";
import blogIcon from "../../assets/4/blogsIcon.png";
import blog1 from "../../assets/4/blogsImg2.png";
import blog2 from "../../assets/4/blogsImg1.png";
import blog3 from "../../assets/4/blogsImg4.png";
import blog4 from "../../assets/4/blogsImg3.png";
import blogMenu1 from "../../assets/8/page2.jpg";
import blogMenu2 from "../../assets/8/page1.jpg";
import blogMenu3 from "../../assets/8/page4.jpg";
import blogMenu4 from "../../assets/8/page3.jpg";
import { Link } from "react-scroll";

const Blog = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleMenu2 = () => {
    setShowMenu2(!showMenu2);
  };
  const toggleMenu3 = () => {
    setShowMenu3(!showMenu3);
  };
  const toggleMenu4 = () => {
    setShowMenu4(!showMenu4);
  };

  return (
    <div className="Blog">
      <div className="imageBg">
        <div className="textContent">
          <img src={blogIcon} />
          <h3>
            A fusion of Marcus'world renowend international cusine with an
            <br /> unforgettable Ethiopian twist.
          </h3>
          <p>Our Chef Recommends</p>
        </div>
        <div className="cards">
          <div className="card">
            <div>
              <img onClick={toggleMenu} src={blog1} />
              {showMenu && (
                <div className="imgContainer">
                  <img src={blogMenu1} onClick={toggleMenu} alt="" />
                </div>
              )}
            </div>
            <div>
              <img onClick={toggleMenu2} src={blog2} />
              {showMenu2 && (
                <div className="imgContainer">
                  <img src={blogMenu2} onClick={toggleMenu2} alt="" />
                </div>
              )}
            </div>
            <div>
              <img onClick={toggleMenu3} src={blog3} />
              {showMenu3 && (
                <div className="imgContainer">
                  <img src={blogMenu3} onClick={toggleMenu3} alt="" />
                </div>
              )}
            </div>
            <div>
              <img onClick={toggleMenu4} src={blog4} />
              {showMenu4 && (
                <div className="imgContainer">
                  <img src={blogMenu4} onClick={toggleMenu4} alt="" />
                </div>
              )}
            </div>
          </div>
          <button>
            <Link to="Reservations">MAKE RESERVATION</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
