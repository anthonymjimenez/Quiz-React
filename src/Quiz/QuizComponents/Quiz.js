import React, {useState} from 'react'
import Questions from '../QuizData/QuizData';
import { AnswerList } from './AnswerList';
import { Question }  from './Question';
import { ScoreBoard } from './ScoreBoard';



export const Quiz = () => {
    var [ index, setIndex ] = useState(0)
    var [ result, setResult ] = useState(null)
    const questionArray = Questions.map((question) => question.question)
    const answers = Questions.map((answer) => answer.answers)
    
    if(index === questionArray.length ) { setIndex(0)}

    // <Score = {score}/>
    // Status Bar/>
    return ( 
    
        <div>
        <ScoreBoard result={result} index={index} />
        <Question Questions={questionArray[index]}></Question>
        <AnswerList Answers={answers[index]} index={index} result={setResult} setIndex={setIndex}></AnswerList>

        </div>
    )
}
