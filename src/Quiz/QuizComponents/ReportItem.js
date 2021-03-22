import React from "react";
import { ListGroupItem } from "reactstrap";
import he from "he";

export default function ReportItem({ correct_answer, question, user_answer }) {
  return (
    <>
      <ListGroupItem>
        {correct_answer === user_answer ? (
          <> Correct &#9989; </>
        ) : (
          <> Incorrect &#10062;</>
        )}
        <ListGroupItem className="justify-content-between">
          {`Question: ${he.decode(String(question))}\n`}
        </ListGroupItem>

        <ListGroupItem className="justify-content-between">
          {`Your Answer: ${he.decode(String(user_answer))}\n`}
          {`Correct Answer: ${he.decode(String(correct_answer))}\n`}
        </ListGroupItem>
      </ListGroupItem>
    </>
  );
}
