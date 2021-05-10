import React from "react";
import he from "he";

export default function ReportItem({ correctAnswer, question, userAnswer }) {
  let isCorrect = correctAnswer === userAnswer;

  // add shadow to report items
  return (
    <>
      <div className={`report-wrapper `}>
        <div
          className={`${
            isCorrect ? "report-answer-right" : "report-answer-wrong"
          }`}
        >
          <div
            className={isCorrect ? "report-question" : "report-question-wrong"}
          >{`Question: ${he.decode(String(question))}\n`}</div>
          <div
            id={`${!isCorrect ? "answer-container" : "answer-container-wrong"}`}
          >
            <div>
              {!isCorrect && `Your Answer: ${he.decode(String(userAnswer))}`}
            </div>
            <div>{`Correct Answer: ${he.decode(String(correctAnswer))}`}</div>
          </div>
        </div>
      </div>
    </>
  );
}
