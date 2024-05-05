import React from "react";
import "./Intro.css";

function Head() {
  return (
    <div className="intro" id="intro">
      <div className="module">
        <header>
          <a href="index.html">
            <img
              className="logo"
              src="../src/assets/images/fake.png"
              alt="logo"
            />
          </a>
          <nav>
            <ul className="nav__links">
              <li>
                <a href="#link1">Verify</a>
              </li>
              <li>
                <a href="#link2">Goal</a>
              </li>
              <li>
                <a href="#link3">Contact Us</a>
              </li>
            </ul>
          </nav>
        </header>

        <p className="heading1">Fake News: The New Nuclear Element,</p>

        <p className="content1">
          Claming more lives at ground zero.
          <br />
          <br />
          <br />
          Misinformation can influence users, manipulating them for political or
          economic reasons. Once you’ve spotted a suspicious piece of content,
          use this website to verify wether it is true or not. Fake news and
          rumors thrive online because few verify what's real and always bias
          towards content that reinforces their own biases.
        </p>

        <p>
          <a href="#link2" className="tag1">
            Tell Me More <i className="arrow fas fa-arrow-down"></i>
          </a>
        </p>

        <img src="../src/assets/images/mid1.jpg" className="middle1" />
      </div>
    </div>
  );
}

export default Head;
