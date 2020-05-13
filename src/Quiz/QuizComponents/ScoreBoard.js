import React, { useEffect } from 'react'

export const ScoreBoard = ({ result, index, setRight, right }) => {
    
    useEffect(() => {
        if(result === true ) { 
            setRight(right + 1)
        }
  
    }, [index]);

    const score = right / index
    var scoreFormatted;

    if(score === 1) {scoreFormatted = 100}
    else if(score === 0) {scoreFormatted = 0}
    else {scoreFormatted = score.toFixed(2) * 100}

    return (
        <div className = "scoreboard">
        <div>Correct Answers: {right}</div>
        <div>Total Questions: {index}</div>
       {(index) ? (<div>Current Score: %{scoreFormatted}</div>) : (<div> Start answering to update score! </div>)}
        
        </div>
    )

    
    }
