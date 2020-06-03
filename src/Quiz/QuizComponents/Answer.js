import React from "react";
import he from "he";
import { Button } from "reactstrap";
export const Answer = ({ text, correct, setResult, setIndex, index }) => {
  function answerResult() {
    setIndex(index + 1);
    correct === text ? setResult(true) : setResult(false);
  }

  console.log(correct);

  var decode = he.decode(String(text));

  return <Button onClick={answerResult}>{decode}</Button>;
};
