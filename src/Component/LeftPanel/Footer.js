import React from "react";
import "./Footer.scss";

function Footer({ nextQuesHandler }) {
  return (
    <div className="footer container">
      <div>
        <button className="left_button">Mark for Review and Next</button>
        <button className="left_button"> Clear Response</button>
      </div>
      <div>
        <button className="right_button" onClick={nextQuesHandler}>
          Save and Next
        </button>
      </div>
    </div>
  );
}

export default Footer;
