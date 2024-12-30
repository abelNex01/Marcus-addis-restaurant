import React, { useState } from "react";
import "./Menus.css";
import menuImage from "../../assets/3/menusImg.png";
import fodsPic from "../../assets/11/Inter1.jpg";
import InternationalDish from "../InternationalDish/InternationalDish";

const Menus = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Menus">
      <div className="row">
        <div className="leftRow">
          <div className="menuList">
            <h3>PASTA & BREAD</h3>
            <h4>M'S CORNBREAD</h4>
            <p>
              Served with spiced rum butter , *dairy / gluten / egg vegetarian
            </p>
            <h4>MERCATO BREAD BASKET</h4>
            <p>
              Fasting Option Available Teff biscuits, M’s cornbread, crispy
              injera, lavash, spiced rum butter, herb chutney, tree tomato
              chutney *dairy / gluten / egg, vegetarian
            </p>
            <h4>PICCADILLY PASTA</h4>
            <p>
              Shrimp & local fish , shiro, zucchini, parsley, cheese *seafood /
              fish sauce / dairy / gluten
            </p>
            <h4>COUSCOUS & AYIB</h4>
            <p>
              Fasting Option Available Spicy tomato dashi, charred tomato and
              zucchini, ayib *gluten / dairy, vegetarian
            </p>
            <h4>DUBE & DURKOSH</h4>
            <p>
              Fasting Item Chickpea hummus, roasted garlic, herb chutney,
              berbere powder *sesame
            </p>
          </div>
        </div>
        <div className="MiddleRow">
          <h1>MENUS</h1>

          <div className="imageMenu">
            <img
              className="transformOnly"
              onClick={toggleMenu}
              src={menuImage}
            />
            {showMenu && (
              <div className="imgContainer">
                {/* <img src={fodsPic} onClick={toggleMenu} alt="" /> */}
                <InternationalDish onClick={toggleMenu} />
              </div>
            )}
          </div>
        </div>
        <div className="rightRow">
          <div className="menuList">
            <h3>LARGE PLATES</h3>
            <h4>CHARRED CAULIFLOWER STEAK</h4>
            <p>
              Fasting Item Jeweled couscous, tomato curry, curried sultana
              relish, *gluten, vegan
            </p>
            <h4>CATCH OF THE DAY</h4>
            <p>
              Miso glaze, seasonal vegetables, bok choy, fish , dashi,
              cauliflower saffron puree, *gluten / miso / soy sauce / fish sauce
            </p>
            <h4>STEAK FRITES</h4>
            <p>
              Tenderloin, French fries, berbere herb churri, herb aiolidairy /
              gluten
            </p>
            <h4>HERB BUTTER ROASTED CHICKEN</h4>
            <p>
              Jollof rice, butter chickpeas, herb chutney, fresh roasted greens,
              dairy / gluten
            </p>
            <h4>HALF FRIED YARD BIRD</h4>
            <p>
              Passion fruit peri-peri, pickled cucumber, berbere fries, dairy /
              gluten
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
