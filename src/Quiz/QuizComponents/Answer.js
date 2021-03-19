import React from "react";
import he from "he";
import { Button } from "reactstrap";
export const Answer = ({
  text,
  question,
  correctAnswer,
  setReport,
  quizLength,
  setQuestionData,
  setGameOver,
  index,
  report,
}) => {
  function answerResult() {
    //  setUserAnswer((answer) => (answer = text));
    //console.log(text);

    setQuestionData((previousState) => {
      return { ...previousState, index: previousState.index + 1 };
    });
    setReport((report) => [
      ...report,
      {
        question: question.question,
        correct_answer: correctAnswer,
        userAnswer: text,
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
