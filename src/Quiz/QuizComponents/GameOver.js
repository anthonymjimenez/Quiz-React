import React, { useEffect, useState } from "react";

export default function GameOver({
  right,
  setRight,
  setGameOver,
  index,
  quizLength,
  setFinalScore,
  result,
}) {
  useEffect(() => {
    if (result === true) {
      setRight(right + 1);
      //setStrek(++1)
    } // else setStrek(0)

    if (index === quizLength && index) {
      setGameOver(true);
    }
  }, [index]);

  return <div></div>;
}
