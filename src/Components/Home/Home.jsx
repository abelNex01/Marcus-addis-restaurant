import React from "react";
import "./Home.css";
import logo from "../../assets/1/logo.png";
import menuIcon from "../../assets/1/menuIcon.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="Home">
      <div className="navBar">
        <div className="navTop">
          <div className="menuIcon">
            <img src={menuIcon} />
            <h4>MENU</h4>
          </div>
          <img src={logo} alt="Marcus addis restaurant" />
          <br />
          <button>
            <Link to="Blog" className="nav-link">
              TODAY'S SPECIAL
            </Link>
          </button>
        </div>
        <div className="navBootom">
          <ul>
            <li>
              <Link
                to="About"
                smooth={true}
                duration={1500}
                className="nav-link"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="Menus"
                smooth={true}
                duration={1500}
                className="nav-link"
              >
                MENUS
              </Link>
            </li>
            <li>
              <Link
                to="Blog"
                smooth={true}
                duration={1500}
                className="nav-link"
              >
                SPECIALS
              </Link>
            </li>
            <li>
              <Link
                to="PrivateDinning"
                smooth={true}
                duration={1500}
                className="nav-link"
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={1500}
                className="nav-link testimo"
              >
                TESTIMONIALS
              </Link>
            </li>
            <li>
              <Link
                to="Reservations"
                smooth={true}
                duration={1500}
                className="nav-link"
              >
                RESERVATIONS
              </Link>
            </li>
            <li>
              <Link
                to="ContactUs"
                smooth={true}
                duration={1500}
                className="nav-link"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bodyContent">
        <h1>
          WELCOME TO <br /> MARCUS <br /> RESTAURANT
        </h1>
        <div className="buttonContanier">
          <button>
            <Link to="Reservations" className="nav-link">
              BOOK A TABLE
            </Link>
          </button>
        </div>
        <div className="bottomText">
          <span className="spanright"></span>
          <p>DINE IN AND CARRY OUT NOW AVAILABLE</p>
          <span className="spanright"></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
