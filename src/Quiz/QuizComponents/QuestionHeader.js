import React from "react";
import { Button } from "reactstrap";
export default function QuestionHeader({ setToggleView, category }) {
  return (
    <>
      <Button color="link" onClick={() => setToggleView(true)}>
        Head back to Toggle View
      </Button>
      <h1 className="display-4">{`${category} quiz`}</h1>
    </>
  );
}
