import React from "react";
import { Answer } from "./Answer";

export const AnswerList = ({
  answers: { questions, index },
  report,
  setGameOver,
  setReport,
  setQuestionData,
}) => {
  let question = questions[index];
  let answersArray = [
    questions[index]?.correct_answer,
    ...questions[index]?.incorrect_answers,
  ];
  let correctAnswer = question.correct_answer;
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
          report={report}
          question={question}
          text={text}
          correctAnswer={correctAnswer}
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
