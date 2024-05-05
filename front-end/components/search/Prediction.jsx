import React from "react";

function Prediction(prediction) {
  return (
    <div>
      <textarea
        id="clear"
        style={{ resize: "none", border: "none", outline: "none" }}
      >
        {{ prediction }}
      </textarea>
    </div>
  );
}

export default Prediction;
