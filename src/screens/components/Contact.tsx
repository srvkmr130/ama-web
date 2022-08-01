import React, { useState } from "react";
import "./styles/contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetOnSubmit = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(true);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/srvkmr130/google_sheets/FkqDAwoRHDtpOuLR?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      resetOnSubmit();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section id="contact">
      <h1 className="section-heading mb50px">
        <span className="mr-20">
          <i className="far fa-address-card"></i>
        </span>
        <span> Contact Us </span>
      </h1>
      <div id="contact-container">
        {!isSubmitted && (
          <div id="contact-form-container">
            <form id="contact-form" onSubmit={handleSubmit}>
              <input
                id="input-name"
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={(e: any) => setName(e.target.value)}
              />
              <input
                id="input-email"
                name="input-email"
                type="text"
                required
                placeholder="Your Email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <input
                id="input-name"
                name="name"
                type="text"
                placeholder="Phone No"
                onChange={(e: any) => setName(e.target.value)}
              />
              <textarea
                id="input-message"
                name="input-message"
                rows={2}
                cols={40}
                placeholder="Message"
                onChange={(e: any) => setMessage(e.target.value)}
              ></textarea>
              <button className="sub-btn" type="submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        )}
        {isSubmitted && (
          <div>
            <h5 id="contact-form-message">
              Thanks <em id="user-name">{name}</em> for connecting !! Will get
              back to you shortly...
            </h5>
          </div>
        )}
        <div id="my-details-container">
          <h3> Stay in touch ! </h3>
          <p>
            <ul>
              <li>
                {" "}
                Ganeswarpur Industrial Estate, Januganj, Balasore Odisha -
                756019
              </li>
              <li>
                Annapurna Agro International Pvt.Ltd.. All Rights Reserved
              </li>
            </ul>{" "}
          </p>

          <h3> Address </h3>
          <div className="my-details-info-container">
            <i className="fas fa-map-marker-alt"></i>
            <span>Balasore Odisha</span>
          </div>
          <div className="my-details-info-container">
            <i className="far fa-envelope"></i>
            <span>xxxxxxxxxx@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="text-center social-icons">
        <ul className="no-list-style horizontal-list">
          <li>
            <a href="" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i className="fab fa-medium"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i className="fab fa-quora"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
