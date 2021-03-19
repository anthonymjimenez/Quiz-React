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
      <h1 className="display-4">{`${questions[index]?.category} quiz`}</h1>
      <h4 className="display-8">
        {index === 0 && (
          <> When the quiz is done you'll be able to check out your report</>
        )}
      </h4>
    </>
  );
}
