import React, { useEffect, useState } from "react";

export default function GameOver({
  setRight,
  questionData: { questions = [], index },
  userAnswer,
}) {
  //questionData to generate report

  useEffect(() => {
    if (userAnswer === "") {
      // change result to user Answer and then compare from here, will make generating report easier
      setRight((right) => right + 1);
    }

    console.log(questions[index - 1], userAnswer); // report
  }, [index]);

  return <div></div>;
}
