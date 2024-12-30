import React, { useEffect, useState } from "react";
import "./ScrollButton.css";
import onTop from "../../assets/1/onTop.png";

const ScrollButton = () => {
  const [isVisible, setIsVisble] = useState(false);

  const toggleVisiblity = () => {
    window.pageYOffset > 300 ? setIsVisble(true) : setIsVisble(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisiblity);
    return () => {
      window.removeEventListener("scroll", toggleVisiblity);
    };
  }, []);

  return (
    <div className="scroll-btn-wrapper">
      {isVisible && (
        <img className="scroll-btn" onClick={scrollToTop} src={onTop} />
      )}
    </div>
  );
};

export default ScrollButton;
