import React, { useState } from "react";
import { AnswerList } from "./AnswerList";
import { Question } from "./Question";
import { ScoreBoard } from "./ScoreBoard";
import { Toggle } from "./Toggle";
import { Jumbotron } from "reactstrap";
import QuestionHeader from "./QuestionHeader";
import GameOver from "./GameOver";
import ScoreHeader from "./ScoreHeader";
import LoadingSpin from "./LoadingSpin";

export const Quiz = () => {
  // hooks used in relation to API Call
  const [questionData, setQuestionData] = useState({});

  // hooks used for game logic
  var [userAnswer, setUserAnswer] = useState("");
  const [rightAnswers, setRightAnswers] = useState(0);

  //hooks for visibility
  const [toggleView, setToggleView] = useState(true);
  const [gameIsOver, setGameOver] = useState(false);
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      {toggleView && (
        <Toggle
          setQuestionData={setQuestionData}
          setToggleView={setToggleView}
          setLoading={setLoading}
        />
      )}
      {!toggleView &&
        !gameIsOver &&
        (isLoading ? (
          <LoadingSpin />
        ) : (
          <Jumbotron>
            <QuestionHeader
              category={questionData}
              setToggleView={setToggleView}
            />
            <Question questionData={questionData} />
            <AnswerList
              answers={questionData}
              setUserAnswer={setUserAnswer}
              setGameOver={setGameOver}
              setQuestionData={setQuestionData}
            />
          </Jumbotron>
        ))}

      {gameIsOver && (
        <Jumbotron>
          <ScoreHeader
            setToggleView={setToggleView}
            setGameOver={setGameOver}
          />
          <ScoreBoard
            rightAnswers={rightAnswers}
            quizLength={questionData?.questions?.length}
          />
        </Jumbotron>
      )}

      <GameOver
        setRight={setRightAnswers}
        questionData={questionData}
        userAnswer={userAnswer}
      />
    </>
  );
};
