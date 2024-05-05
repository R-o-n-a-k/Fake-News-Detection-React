// import React from "react";
import "./Search.css";
import Prediction from "./Prediction";
import React, { useState } from "react";

function About() {
  const [newsText, setNewsText] = useState("");
  const [prediction, setPrediction] = useState("");

  const clearFunction = () => {
    document.getElementById("clear").value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/predicted", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ news: newsText }),
      });
      const data = await response.json();
      // Extract the prediction result from the response
      const predictionResult = data.prediction;
      setPrediction(predictionResult);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="search" id="link1">
      <div className="module">
        <p className="heading2">See the truth in black and white.</p>
        <p className="heading3">Search:</p>
        <div className="wrapper">
          <form id="form1" onSubmit={handleSubmit}>
            <div className="group">
              <textarea
                value={newsText}
                onChange={(e) => setNewsText(e.target.value)}
                type="text"
                placeholder="Paste text here..."
                name="news"
                autoComplete="off"
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
            </div>
            <button type="submit" className="two-btn predict">
              Predict
            </button>
            <button
              type="button"
              className="two-btn result"
              onClick={clearFunction}
            >
              Clear
            </button>

            <br />
            <Prediction prediction={prediction} />
          </form>
        </div>
        <img src="../src/assets/images/mid3.jpg" className="middle3" />
      </div>
    </div>
  );
}

export default About;
