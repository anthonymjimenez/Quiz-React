import React from "react";
import { Button } from "reactstrap";
export default function QuestionHeader({
  setToggleView,
  category: { questions, index },
}) {
  return (
    <>
      <Button color="link" onClick={() => setToggleView(true)}>
        Head back to Toggle View
      </Button>
      {console.log(index)}
      <h2 id="category-text">{`${questions[index]?.category} quiz`}</h2>
      <h5 id="report-notification-text">
        {index === 0 && (
          <> When the quiz is done you'll be able to check out your report</>
        )}
      </h5>
    </>
  );
}
