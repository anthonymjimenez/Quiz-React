import React from "react";
import he from "he";

export default function ReportItem({ correctAnswer, question, userAnswer }) {
  let isCorrect = correctAnswer === userAnswer;

  // add flexbox instead of line 21 for experience
  return (
    <>
      <div className={`report-wrapper `}>
        <div
          className={`report-question ${
            isCorrect ? "green-border" : "red-border"
          }`}
        >
          {`Question: ${he.decode(String(question))}\n`}
        </div>

        <div
          className={`${
            isCorrect ? "report-answer-right" : "report-answer-wrong"
          }`}
        >
          <div id="user-answer">
            {!isCorrect && `Your Answer: ${he.decode(String(userAnswer))}`}
          </div>
          <div id="correct-answer">
            {`Correct Answer: ${he.decode(String(correctAnswer))}`}
          </div>
        </div>
      </div>
    </>
  );
}
