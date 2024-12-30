import React from "react";
import "./Reservations.css";
import icon from "../../assets/6/icon.png";
import marcus from "../../assets/6/marcus.png";

const Reservations = () => {
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
    <div className="Reservations">
      <div className="row">
        <div className="left">
          <img src={icon} />
          <h2>Host Your Private Events and Parties with Us</h2>
          <p>
            Wheater it’s party, birthday celebration, private functions or
            awards <br /> Ceremony, we can accomodule your upcoming events.
          </p>
          <div className="inputContent">
            <form onSubmit={onSubmit}>
              <div className="input1">
                <input
                  type="number"
                  placeholder="person"
                  name="person"
                  required
                  autoComplete="off"
                />
                <input type="date" name="date" required autoComplete="off" />
                <input type="time" name="time" required autoComplete="off" />
              </div>
              <div className="input2">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                  autoComplete="off"
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                  autoComplete="off"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="textArea">
                <textarea
                  placeholder="Special Requests"
                  name="message"
                  rows="5"
                  cols="50"
                  required
                  autoComplete="off"
                ></textarea>
              </div>
              <button type="submit">MAKE RESERVATION</button>
            </form>
            <span>{result}</span>
          </div>
        </div>
        <div className="right">
          <img src={marcus} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reservations;
