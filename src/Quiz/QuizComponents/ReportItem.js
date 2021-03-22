import React from "react";
import { ListGroupItem, ListGroup } from "reactstrap";
import he from "he";

export default function ReportItem({ correctAnswer, question, userAnswer }) {
  return (
    <>
      <ListGroup>
        {correctAnswer === userAnswer ? (
          <> Correct &#9989; </>
        ) : (
          <> Incorrect &#10062;</>
        )}
        <ListGroupItem className="justify-content-between">
          {`Question: ${he.decode(String(question))}\n`}
        </ListGroupItem>

        <ListGroupItem className="justify-content-between">
          {`Your Answer: ${he.decode(String(userAnswer))}\n`}
          {`Correct Answer: ${he.decode(String(correctAnswer))}\n`}
        </ListGroupItem>
      </ListGroup>
    </>
  );
}
