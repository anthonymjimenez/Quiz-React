import React from "react";
import he from "he";
import { Button } from "reactstrap";
export const Answer = ({
  answer,
  questionData: { question, correct_answer },
  setReport,
  quizLength,
  setQuestionData,
  setGameOver,
  index,
}) => {
  function answerResult() {
    setQuestionData((previousState) => {
      return { ...previousState, index: previousState.index + 1 }; // increment index
    });
    setReport((report) => [
      ...report,
      {
        question: question,
        correctAnswer: correct_answer,
        userAnswer: answer,
      }, // sets new report object while maintaining existing state
    ]);
    if (index + 1 === quizLength) {
      setGameOver(true); // triggers rendering of GameOver components
    }
  }

  const decodedAnswer = he.decode(String(answer)); // he is a package that decodes strings

  return (
    <Button className="ansButton" onClick={answerResult}>
      {decodedAnswer}
    </Button>
  );
};
