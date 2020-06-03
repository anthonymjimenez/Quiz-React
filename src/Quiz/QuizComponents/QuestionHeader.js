import React from "react";
import { Button } from "reactstrap";
import LoadingSpin from "./LoadingSpin";
export default function QuestionHeader({ isLoading, setToggleView, category }) {
  return (
    <>
      <Button color="link" onClick={() => setToggleView(true)}>
        Head back to Toggle View
      </Button>
      <h1 className="display-4">
        {isLoading ? <LoadingSpin /> : `${category} quiz`}
      </h1>
    </>
  );
}
