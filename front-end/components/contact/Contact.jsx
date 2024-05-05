import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="module">
        <h1 className="contact-us" id="link3">
          Contact Us
        </h1>
        <div className="shift">
          <div className="wrapper">
            <form action="https://formspree.io/f/mzbyrqwa" method="POST">
              <div className="group">
                <input
                  placeholder="Email-Id"
                  autoComplete="off"
                  type="email"
                  name="_replyto"
                  required
                  pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
              </div>
              <div className="group">
                <textarea
                  name="message"
                  type="text"
                  placeholder="Content"
                  autoComplete="off"
                ></textarea>
                <span className="highlight"></span>
                <span className="bar"></span>
              </div>
              <button type="submit" className="two-btn send">
                Send
              </button>
            </form>
          </div>
          <img src="../src/assets/images/mid2.jpg" className="middle2" />
          <img src="../src/assets/images/mid4.jpg" className="middle4" />
        </div>

        <div className="social">
          <a href="https://www.facebook.com">
            <i id="fab" className="social-icon fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com">
            <i id="twitter" className="social-icon fab fa-twitter-square"></i>
          </a>
          <a href="https://www.instagram.com">
            <i id="insta" className="social-icon fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
