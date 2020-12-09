import React from "react";
import "./RightPanel.scss";

function RightPanel() {
  return (
    <div className="rigthpanel">
      <div>
        <div className="option1">
          <span className="type_notvisited">2</span>
          <span>Question not Visited</span>
        </div>
        <div className="option2">
          <span className="question_notanswered">2</span>
          <span>Question not Answered</span>
        </div>
        <div className="option3">
          <span className="type_quesanswered">2</span>
          <span>Question Answered</span>
        </div>
        <div className="option">
          <span className="type_quesmarked">2</span>
          <span>Question Marked</span>
        </div>
        <div className="option">
          <span className="type_answeredandreview">2</span>
          <span>Question Answered and Marked for Review</span>
        </div>
        <div className="section_name">
          <span>Name of Section</span>
        </div>
        <div>
          <p className="mb-0">Choose question</p>
          <div className="questions">
            <span className="question">1</span>
            <span className="question">2</span>
            <span className="question">3</span>
            <span className="question">4</span>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="submitexam">Submit Exam</button>
      </div>
    </div>
  );
}

export default RightPanel;
