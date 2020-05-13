import React from 'react'
import { Answer } from './Answer'

export const AnswerList = ({answers , correctAns, index, setResult, setIndex }) => {
    // [reportText, setReportText] <- grabs 'text' answer from Answer
    // create report from here
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
      }
      
   var newArr = shuffle([answers, correctAns].flat()) // combine incorrect and correct answers flatten and then shuffle
       return (
        <>
        {newArr.map((text) => 
         <Answer 
                text={text} 
                correct ={correctAns} 
                setResult={setResult}
                setIndex={setIndex} 
                index={index} 
                />)}
      
       </> 
    )
}
