import React, { useState } from "react";
import "./PrivateDinning.css";
import privateImg1 from "../../assets/5/privateImg1.png";
import privateImg2 from "../../assets/5/privateImg2.png";
import privateImg3 from "../../assets/5/privateImg3.png";
import privateImg4 from "../../assets/5/privateImg4.png";
import pizzaMenu from "../../assets/10/pizzaMenu.png";
import { Link } from "react-scroll";

const PrivateDinning = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="PrivateDinning">
      <div className="rows">
        <div className="row1">
          <div className="imgCard">
            <img className="privateView" src={privateImg1} />
          </div>
          <div className="textCard">
            <p>HANDCRAFTED</p>
            <h3>
              SAVOR EVERY <br />
              BITE
            </h3>
            <div className="imageMenu">
              <h4 onClick={toggleMenu}>PIZZA MENU</h4>

              {showMenu && (
                <div className="pizzaMenus">
                  <img src={pizzaMenu} onClick={toggleMenu} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="imgCardMain">
            <img className="bigassimg" src={privateImg2} />
          </div>
          <div className="textCard3">
            <p>EVERY PLATE TELLS A STORY</p>
            <h3>INTERNATIONAL</h3>
            <Link to="Menus">
              <h4>VIEW MENU</h4>
            </Link>
          </div>
        </div>
        <div className="row3">
          <div className="textCard textcardHider">
            <p>FINE DINNING EXPERIENCES</p>
            <h3>
              TASTE THE
              <br />
              DIFFERENCE
            </h3>
            <h4>PRIVATE DINNING</h4>
          </div>
          <div className="imgCard ">
            <img className="privateHide" src={privateImg3} />
          </div>
        </div>
        <div className="row4">
          <div className="imgCard">
            <img className="hideit" src={privateImg4} />
          </div>
          <div className="textCard textCardMod ">
            <p>INDULGE IN FLAVOR</p>
            <h3>
              SAVOR <br />
              JOY
            </h3>
            <h4>BOOK A TABLE</h4>
          </div>
        </div>
      </div>
      <div className="textContents">
        <h1>"</h1>
        <h2>
          A restaurant featuring a fusion of international cusine <br />
          with an Ethiopian twist.
        </h2>
        <p>Marcus Samuelsson</p>
      </div>
    </div>
  );
};

export default PrivateDinning;
