import React from "react";
import "./Goal.css";

function Goal() {
  return (
    <div class="goal" id="link2">
      <div class="module">
        <h2>How We Do It</h2>
        <div class="grid-container">
          <div class="grid-item">
            <img src="../src/assets/images/question-mark.png" />
            <p class="hcontent2">What is fake news?</p>
            <p class="content2">
              “Fake news” is a term used to refer to fabricated news. Fake news
              is an invention – a lie created out of nothing – that takes the
              appearance of real news with the aim of deceiving people. This is
              what is important to remember: the information is false, but it
              seems true.
            </p>
          </div>
          <div class="grid-item">
            <img src="../src/assets/images/dart.png" />
            <p class="hcontent2">Our goal</p>
            <p class="content2">
              To assist mitigate the negative effects caused by fake news, we
              propose to use the technological advancements in ML and AI to
              fabricate an algorithm to detect the truth.
            </p>
          </div>
          <div class="grid-item">
            <img src="../src/assets/images/gears.png" />
            <p class="hcontent2">Process</p>
            <p class="content2">
              The prediction is done by recognizing what kind of source the news
              has been available from, the quality of text and language, and
              grammatical errors if any in the news snippet using Deep Learnng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
