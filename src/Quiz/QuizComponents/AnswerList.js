import React from "react";
import { Answer } from "./Answer";

export const AnswerList = ({ answers, index, setResult, setIndex }) => {
  // [reportText, setReportText] <- grabs 'text' answer from Answer
  // create report from here
  if (answers) var correctAns = answers[0];

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const arrayCheck = (arg) => {
    return Array.isArray(arg) ? arg : [];
  };

  return (
    <>
      {shuffle(arrayCheck(answers)).map((text) => (
        <Answer
          text={text}
          correct={correctAns}
          setResult={setResult}
          setIndex={setIndex}
          index={index}
        />
      ))}
    </>
  );
};
