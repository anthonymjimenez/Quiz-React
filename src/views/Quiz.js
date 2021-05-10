import React, { useState } from "react";
import { AnswerList } from "../containers/AnswerList";
import { Question } from "../components/Question";
import { Report } from "../components/Report";
import { Toggle } from "../components/Toggle";
import { Jumbotron } from "reactstrap";
import QuestionHeader from "../components/QuestionHeader";
import ScoreHeader from "../components/ScoreHeader";
import LoadingSpin from "../components/LoadingSpin";

export const Quiz = () => {
  // hooks used in relation to API Call
  const [questionData, setQuestionData] = useState([]);
  const [report, setReport] = useState([]);

  //hooks for visibility
  const [toggleView, setToggleView] = useState(true);
  const [gameIsOver, setGameOver] = useState(false);
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      {toggleView && (
        <div id="home-wrapper">
          <div className="home-screen shadow">
            <Toggle
              setQuestionData={setQuestionData}
              setToggleView={setToggleView}
              setLoading={setLoading}
            />
          </div>
        </div>
      )}
      {!toggleView &&
        !gameIsOver &&
        (isLoading ? (
          <LoadingSpin />
        ) : (
          <div id="question-wrapper">
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
          </div>
        ))}

      {gameIsOver && (
        <div id="game-over-wrapper">
          <div id="score-header-wrapper">
            <ScoreHeader
              setReport={setReport}
              setToggleView={setToggleView}
              setGameOver={setGameOver}
            />
          </div>
          <div className="report shadow">
            <Report
              report={report}
              quizLength={questionData?.questions?.length}
            />
          </div>
        </div>
      )}
    </>
  );
};
