import { ListGroup } from "reactstrap";
import ReportItem from "./ReportItem";
import React from "react";
export default function ReportList({ report }) {
  return (
    <ListGroup>
      {report.map(({ correctAnswer, question, userAnswer }) => (
        <>
          <ReportItem
            correctAnswer={correctAnswer}
            question={question}
            userAnswer={userAnswer}
          />
        </>
      ))}
    </ListGroup>
  );
}
