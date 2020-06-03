import React, { useEffect, useState } from "react";
import { scoreFormatted } from "../utils/utils";
export const ScoreBoard = ({ finalScore, right }) => {
  // if index === 0 then right === 0 --> this way when index is reset in toggle so is right answers

  return (
    <>
      <>
        <h1 className="display-4">Correct Answers: {right}</h1>
        <hr className="my-2" />

        <h1 className="display-4">
          Final Score: %{scoreFormatted(finalScore)}
        </h1>

        <hr className="my-2" />
      </>
      <p lead>Thanks for checking out my project 👋🏽</p>
    </>
  );
};
