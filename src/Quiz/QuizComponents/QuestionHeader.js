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
      <h1 className="display-4">{`${questions[index]?.category} quiz`}</h1>
    </>
  );
}
