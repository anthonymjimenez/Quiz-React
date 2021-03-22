import { ListGroup } from "reactstrap";
import ReportItem from "./ReportItem";
import React from "react";
export default function ReportList({ report }) {
  return (
    <ListGroup>
      {report.map(({ correct_answer, question, user_answer }) => (
        <>
          <ReportItem
            correct_answer={correct_answer}
            question={question}
            user_answer={user_answer}
          />
        </>
      ))}
    </ListGroup>
  );
}
