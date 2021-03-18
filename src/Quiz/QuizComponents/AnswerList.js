import React from "react";
import { Answer } from "./Answer";

export const AnswerList = ({
  answers: { questions, index },
  setUserAnswer,
  setGameOver,
  setQuestionData,
}) => {
  let answersArray = [
    questions[index]?.correct_answer,
    ...questions[index]?.incorrect_answers,
  ];
  let correctAns = answersArray[0];

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const arrayCheck = (arg) => {
    return Array.isArray(arg) ? arg : [];
  };

  return (
    <>
      {shuffle(arrayCheck(answersArray)).map((text) => (
        <Answer
          text={text}
          setUserAnswer={setUserAnswer}
          quizLength={questions.length}
          index={index}
          setQuestionData={setQuestionData}
          setGameOver={setGameOver}
        />
      ))}
    </>
  );
};
