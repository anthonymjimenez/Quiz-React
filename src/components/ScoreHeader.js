import React from "react";
import { Button } from "reactstrap";
export default function ScoreHeader({ setGameOver, setReport, setToggleView }) {
  return (
    <Button
      color="link"
      onClick={() => {
        setReport([]);
        setGameOver(false);
        setToggleView(true);
      }}
    >
      Head back to Toggle View
    </Button>
  );
}
