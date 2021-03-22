import React, { useEffect, useState } from "react";
import ReportList from "./ReportList";
import { scoreFormatted, findCorrectAnswerAmount } from "../utils/utils";
export const ScoreBoard = ({ quizLength, report }) => {
  // if index === 0 then right === 0 --> this way when index is reset in toggle so is right answers
  let rightAnswer = findCorrectAnswerAmount(report);
  return (
    <>
      <>
        <h1 className="display-5">Correct Answers: {rightAnswer}</h1>
        <hr className="my-2" />

        <h1 className="display-5">
          Final Score: {scoreFormatted(rightAnswer, quizLength)}%
        </h1>

        <hr className="my-2" />
      </>

      <h3 className="display-6">Quiz Report:</h3>
      <ReportList report={report} />
      {console.log(report)}
      <p className="lead">Thanks for checking out my project 👋🏽</p>
    </>
  );
};
