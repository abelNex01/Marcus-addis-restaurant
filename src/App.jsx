import React from "react";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Menus from "./Components/Menus/Menus.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import PrivateDinning from "./Components/PrivateDinning/PrivateDinning.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Reservations from "./Components/Reservations/Reservations.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import { Fade } from "react-awesome-reveal";
import ScrollButton from "./Components/ScrollButton/ScrollButton.jsx";

const App = () => {
  return (
    <div>
      <ScrollButton />
      <Fade effect="fade">
        <Home />
        <About />
        <Menus />
        <Blog />
        <PrivateDinning />
        <Testimonials />
        <Reservations />
        <ContactUs />
      </Fade>
    </div>
  );
};

export default App;
