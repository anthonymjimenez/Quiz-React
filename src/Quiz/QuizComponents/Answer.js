import React from 'react'

export const Answer = ({ text, correct, result, setIndex, index}) => {
    function answerResult() {
        setIndex(index + 1);
        (correct === true) ? result(true) : result(false)

    }
    return (
        <button onClick={answerResult}>
            {text}
            {correct}
        </button>
    
    )
}
