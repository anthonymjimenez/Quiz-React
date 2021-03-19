import React, { useEffect, useState } from "react";

export default function GameOver({
  setRight,
  questionData: { questions = false, index },
  userAnswer,
}) {
  //questionData to generate report

  useEffect(() => {
    let question = questions[index];
    if (userAnswer === question?.correct_answer) {
      // change result to user Answer and then compare from here, will make generating report easier
      setRight((right) => right + 1);
      console.log("ping");
    }
  }, [index]);

  return <div></div>;
}
