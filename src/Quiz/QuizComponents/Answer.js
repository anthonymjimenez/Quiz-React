import React from "react";
import he from "he";
import { Button } from "reactstrap";
export const Answer = ({
  text,
  correct,
  setResult,
  quizLength,
  setQuestionData,
  setGameOver,
  index,
}) => {
  function answerResult() {
    correct === text ? setResult(true) : setResult(false);
    setQuestionData((previousState) => {
      return { ...previousState, index: previousState.index + 1 };
    });

    if (index + 1 === quizLength) setGameOver(true);
  }

  console.log(correct);

  var decode = he.decode(String(text));

  return (
    <Button className="ansButton" onClick={answerResult}>
      {decode}
    </Button>
  );
};
