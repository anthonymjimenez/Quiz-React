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
  const [questionData, setQuestionData] = useState([]);

  // hooks used for game logic
  var [index, setIndex] = useState(0);
  var [result, setResult] = useState(null);
  const [right, setRight] = useState(0);

  //hooks for visibiltiy
  const [toggleView, setToggleView] = useState(true);
  const [gameIsOver, setGameOver] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const questions = questionData.map(({ question }) => [question]);

  const category = questionData.map(({ category }) => category);
  const answers = questionData.map(({ incorrect_answers, correct_answer }) =>
    [correct_answer, incorrect_answers].flat()
  );
  //

  return (
    <>
      {toggleView && (
        <Toggle
          setQuestionData={setQuestionData}
          setToggleView={setToggleView}
          setIndex={setIndex}
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
              category={category[index]}
              setToggleView={setToggleView}
            />
            <Question question={questions[index]} />
            <AnswerList
              answers={answers[index]}
              index={index}
              setResult={setResult}
              setIndex={setIndex}
            />
          </Jumbotron>
        ))}

      {gameIsOver && (
        <Jumbotron>
          <ScoreHeader
            setToggleView={setToggleView}
            setGameOver={setGameOver}
          />
          <ScoreBoard right={right} finalScore={right / index} />
        </Jumbotron>
      )}

      <GameOver
        right={right}
        setRight={setRight}
        quizLength={questions.length}
        setGameOver={setGameOver}
        result={result}
        index={index}
      />
    </>
  );
};
