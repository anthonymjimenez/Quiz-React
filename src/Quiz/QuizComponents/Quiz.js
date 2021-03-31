import React, { useState } from "react";
import { AnswerList } from "./AnswerList";
import { Question } from "./Question";
import { Report } from "./Report";
import { Toggle } from "./Toggle";
import { Jumbotron } from "reactstrap";
import QuestionHeader from "./QuestionHeader";
import ScoreHeader from "./ScoreHeader";
import LoadingSpin from "./LoadingSpin";

export const Quiz = () => {
  // hooks used in relation to API Call
  const [questionData, setQuestionData] = useState({ questions: [1, 2] });
  const [report, setReport] = useState([
    {
      question: "How old am I?",
      userAnswer: "Too Old",
      correctAnswer: "Too Old",
    },
    {
      question: "How old am I?",
      userAnswer: "Too Old",
      correctAnswer: "Not old enough",
    },
  ]);

  //hooks for visibility
  const [toggleView, setToggleView] = useState(false);
  const [gameIsOver, setGameOver] = useState(true);
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
              setReport={setReport}
              answers={questionData}
              setGameOver={setGameOver}
              setQuestionData={setQuestionData}
            />
          </Jumbotron>
        ))}

      {gameIsOver && (
        <>
          <ScoreHeader
            setReport={setReport}
            setToggleView={setToggleView}
            setGameOver={setGameOver}
          />
          <Report
            report={report}
            quizLength={questionData?.questions?.length}
          />
        </>
      )}
    </>
  );
};
