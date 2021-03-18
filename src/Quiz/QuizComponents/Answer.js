import React from "react";
import he from "he";
import { Button } from "reactstrap";
export const Answer = ({
  text,
  setUserAnswer,
  quizLength,
  setQuestionData,
  setGameOver,
  index,
}) => {
  function answerResult() {
    setUserAnswer(text);
    setQuestionData((previousState) => {
      return { ...previousState, index: previousState.index + 1 };
    });

    if (index + 1 === quizLength) setGameOver(true);
  }

  var decode = he.decode(String(text));

  return (
    <Button className="ansButton" onClick={answerResult}>
      {decode}
    </Button>
  );
};
