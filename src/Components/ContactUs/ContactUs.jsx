import React from "react";
import "./ContactUs.css";
import icons1 from "../../assets/7/facebook.png";
import icons2 from "../../assets/7/twitter.png";
import icons3 from "../../assets/7/instagram.png";
import { Link } from "react-scroll";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6e1c18de-37cc-4327-88e6-902c2a2b22e7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="ContactUs">
      <div className="rowsss">
        <div className="headerText">
          <div className="leftRowss">
            <h1>SIGN UP FOR OUT NEWSLETTER</h1>
            <p>
              Sign up to be the first to recieve special news and event updates
              from us.
            </p>
          </div>
          <div className="rightRowss">
            <span>
              <form onSubmit={onSubmit}>
                <input
                  className="inputTop"
                  type="text"
                  name="email"
                  required
                  placeholder="Your Email Adress"
                  autoComplete="off"
                />
                <button type="submit" className="submitBtn">
                  Submit
                </button>
                <br />
                <span>
                  <input type="radio" required />I agree to the Privacy and
                  Policy
                </span>
              </form>
              <span className="spanSubmit">{result}</span>
            </span>
          </div>
        </div>
        <footer>
          <div className="container footer__container">
            <div className="footer__1">
              <h4>LOCATIONS</h4>
              <div>
                <p>ADDIS ABABA</p>
              </div>
            </div>
            <div className="footer__2">
              <h4>QUICK LINKS</h4>
              <div>
                <Link
                  to="Home"
                  smooth={true}
                  duration={1500}
                  className="nav-link"
                >
                  <span>
                    <p>Home</p>
                  </span>
                </Link>
                <Link
                  to="About"
                  smooth={true}
                  duration={1500}
                  className="nav-link"
                >
                  <span>
                    <p>About</p>
                  </span>
                </Link>
                <Link
                  to="Reservations"
                  smooth={true}
                  duration={1500}
                  className="nav-link"
                >
                  <span>
                    <p>Booking</p>
                  </span>
                </Link>
                <span>
                  <p>Latest News</p>
                </span>
              </div>
            </div>
            <div className="footer__3">
              <h4>OPENING HOURS</h4>
              <div>
                <p>Mon - Thu: 12am to 9pm</p>
                <p>Fri: 12am to 10pm</p>
                <p>Sat: 11:30am to 10pm</p>
                <p>Sun: 11:30am to 8:30pm</p>
              </div>
            </div>
            <div className="footer__4">
              <h4>CONTACT US</h4>
              <div>
                <p>
                  <b>For General Enqueries</b>
                </p>
                <p>Phone +251966918730</p>
                <p>Email hello@marcusaddis.com</p>
              </div>
            </div>
            <div className="footer__5">
              <h4>FOLLOW US</h4>
              <div className="socialMedia-Icon">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/MarcusCooks/"
                >
                  <img src={icons1} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/MarcusCooks/status/1748386920961306783"
                >
                  <img src={icons2} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/marcusaddisababa/p/C0Od1IWMs5f/?locale=us&img_index=1"
                >
                  <img src={icons3} />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <small>Copyright reserved 2024 Addis Ababa, Ethiopia.</small>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
