import React, { useEffect } from 'react'

export const ScoreBoard = ({ result, index, setRight, right }) => {
    
    useEffect(() => {
        if(result === true ) { 
            setRight(right + 1)
        }
  
    }, [index]);

    const score = right / index
    return (
        <div className = "scoreboard">
        <div>Correct Answers: {right}</div>
        <div>Total Questions: {index}</div>
       {(index) ? (<div>Current Score: {score}</div>) : (<div> Start answering to update score! </div>)}
        

        </div>
    )

    
    }
