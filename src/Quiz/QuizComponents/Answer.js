import React from "react";
import he from "he";
import { Button } from "reactstrap";
export const Answer = ({
  text,
  question,
  setReport,
  quizLength,
  setQuestionData,
  setGameOver,
  index,
}) => {
  function answerResult() {
    setQuestionData((previousState) => {
      return { ...previousState, index: previousState.index + 1 };
    });
    setReport((report) => [
      ...report,
      {
        question: question.question,
        correct_answer: question.correct_answer,
        user_answer: text,
      },
    ]);
    if (index + 1 === quizLength) {
      setGameOver(true);
    }
  }

  var decode = he.decode(String(text));

  return (
    <Button className="ansButton" onClick={answerResult}>
      {decode}
    </Button>
  );
};
