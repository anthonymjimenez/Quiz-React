import React from 'react'

export const Toggle = ({ difficulty, category, setDifficulty, setCategory}) => {
    return (
        <>
        <div className = 'toggle'>
        <p>Choose difficulty!</p> 
        <p>Current difficulty: {difficulty}</p>
        <button onClick={() => setDifficulty('easy')}>Easy</button>
        <button onClick={() =>setDifficulty('medium')}>Medium</button>
        <button onClick={() => setDifficulty('hard')}>Hard</button>
        </div>

        <div className = 'toggle'>
        <p>Choose category!</p>
        <p>Current category: {category}</p>
        <button onClick = {() => setCategory('video Game')}>Video Games</button>
        <button onClick = {() => setCategory('computers')}>Computers</button>
        <button onClick = {() => setCategory('sports')}>Sports</button>
        <button onClick = {() => setCategory('books')}> Books</button>
        </div>
        </>
    )
}
