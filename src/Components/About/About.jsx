import React from "react";
import "./About.css";
import aboutForkIcon from "../../assets/2/aboutForkIcon.png";
import aboutFood1 from "../../assets/2/aboutFood1.png";
import aboutFood2 from "../../assets/2/aboutFood2.png";
import aboutFood3 from "../../assets/2/aboutFood3.png";
import aboutFood4 from "../../assets/2/aboutFood4.png";
import aboutFood5 from "../../assets/2/aboutFood5.png";
import aboutFood6 from "../../assets/2/aboutFood6.png";

const About = () => {
  return (
    <div className="About">
      <div className="textContent">
        <img src={aboutForkIcon} />
        <h1>A HOMECOMING FOR CHEF MARCUS SAMUELSSON</h1>
        <p>
          Born in Ethiopia Raised in Sweden, Inspired by Harlem, Welcome to
          Marcus first restaurant in Africa. We bring to you the very best of
          Ethiopian cooking: robust flavours, beautiful fresh produce, and an
          atomosphere you can’t find anywhere else.
        </p>
      </div>
      <div className="imageCard">
        <img src={aboutFood1} />
        <img src={aboutFood2} />
        <img src={aboutFood3} />
        <img src={aboutFood4} />
        <img src={aboutFood5} />
        <img src={aboutFood6} />
      </div>
    </div>
  );
};

export default About;
