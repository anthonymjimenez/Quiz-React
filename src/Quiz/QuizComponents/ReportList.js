import ReportItem from "./ReportItem";
import React from "react";
export default function ReportList({ report }) {
  return (
    <>
      {report.map(({ correctAnswer, question, userAnswer }) => (
        <>
          <ReportItem
            correctAnswer={correctAnswer}
            question={question}
            userAnswer={userAnswer}
          />
        </>
      ))}
    </>
  );
}
