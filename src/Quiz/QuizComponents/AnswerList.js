import React from "react";
import { Answer } from "./Answer";

export const AnswerList = ({
  answers: { questions, index },
  setGameOver,
  setReport,
  setQuestionData,
}) => {
  let question = questions[index];
  let answersArray = [
    questions[index]?.correct_answer,
    ...questions[index]?.incorrect_answers,
  ];
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      {shuffle(answersArray).map((text) => (
        <Answer
          key={text}
          question={question}
          text={text}
          setReport={setReport}
          quizLength={questions.length}
          index={index}
          setQuestionData={setQuestionData}
          setGameOver={setGameOver}
        />
      ))}
    </>
  );
};
