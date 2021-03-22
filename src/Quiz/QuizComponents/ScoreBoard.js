import React, { useEffect, useState } from "react";
import ReportList from "./ReportList";
import { scoreFormatted } from "../utils/utils";
export const ScoreBoard = ({ quizLength, report }) => {
  // if index === 0 then right === 0 --> this way when index is reset in toggle so is right answers
  let 
  return (
    <>
      <>
        <h1 className="display-4">Correct Answers: {rightAnswers}</h1>
        <hr className="my-2" />

        <h1 className="display-4">
          Final Score: {scoreFormatted(rightAnswers / quizLength)}%
        </h1>

        <hr className="my-2" />
      </>

      <h1 className="display-6">Quiz Report:</h1>
      <ReportList report={report} />
      {console.log(report)}
      <p className="lead">Thanks for checking out my project 👋🏽</p>
    </>
  );
};
