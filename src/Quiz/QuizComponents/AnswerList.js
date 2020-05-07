import React from 'react'
import { Answer } from './Answer'

export const AnswerList = ({ Answers , index, result, setIndex }) => {
    
    return (
        <>
        {Answers.map(({text, correct}) =>
         <Answer 
                text={text} 
                correct ={correct} 
                result={result}
                setIndex={setIndex} 
                index={index} 
                />)}
       </> 
    )
}
