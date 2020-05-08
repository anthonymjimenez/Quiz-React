import React, {useState, useEffect} from 'react'
import { AnswerList } from './AnswerList';
import { Question }  from './Question';
import { ScoreBoard } from './ScoreBoard';
import axios from 'axios';



export const Quiz = () => {
  // hooks used in relation to API Call
    const [questionData, setQuestionData] = useState([]) 
    const [answerData, setAnsData] = useState([])
    const [correctAnsData, setCorrectAnsData] = useState([])
    const [loading, setLoading] = useState(true)

  // hooks used for game logic
    var [ index, setIndex ] = useState(0)
    var [ result, setResult ] = useState(null)
    var [ difficulty, setDifficulty ] = useState('hard')
    var [category, setCategory] = useState('Computers')
    var [right, setRight] = useState(0)


    const getData = async (diff, cat) => { //API call to a triva database
        setLoading(true)
        const incomingData = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}&type=multiple`);
        setLoading(false)
        setQuestionData(incomingData.data.results.map(({ question }) => question))
        setAnsData(incomingData.data.results.map(({ incorrect_answers }) => incorrect_answers))
        setCorrectAnsData(incomingData.data.results.map(({ correct_answer }) => correct_answer)) 
  };

    useEffect(() => {
      // this useEffect listens for changes to difficulty and or category
      var categoryNumber;

      if(category === "Video Games") { categoryNumber = 15}
      else if(category === "Computers") { categoryNumber = 18}
      else if(category === "Sports") { categoryNumber = 21}
      else if(category === "Books") { categoryNumber = 10}
      // the api defines category in terms of numbers, this is how we get the current category to be a relevent string

      getData(difficulty, categoryNumber)
      // the call to getData makes a request on the triva API that implements template strings to 
      // easily change the API request to match user input
    },[difficulty, category])
    
    function easyDifficulty() {
      setDifficulty('easy')
    }
    function mediumDifficulty() {
      setDifficulty('medium')
    }
    function hardDifficulty() {
      setDifficulty('hard')
    }

    function categoryVG() {setCategory('Video Games')}
    function categoryComps() { setCategory('Computers')}
    function categorySports() {setCategory('Sports')}
    function categoryBooks()  { setCategory('Books')}
 

 

    useEffect(() => {if(index === questionData.length || loading === true) { 
      // useEffect to reset the values that scoreboard implements
      setIndex(0)
      setRight(0)
      setResult(false)
    }}, [index, loading])
   

    if (loading) return "loading...";
    return ( 
    
        <>
        <ScoreBoard result={result} index={index} setRight = {setRight} right = {right} />

        <div className = 'float half'>
        <p>Current difficulty: {difficulty}</p>
        <p>Choose difficulty!</p> 
        <button onClick={easyDifficulty}>Easy</button>
        <button onClick={mediumDifficulty}>Medium</button>
        <button onClick={hardDifficulty}>Hard</button>
        </div>

        <div className = 'float half'>
        <p>Current category: {category}</p>
        <p>Choose category!</p>
        <button onClick = {categoryVG}>Video Games</button>
        <button onClick = {categoryComps}>Computers</button>
        <button onClick = {categorySports}>Sports</button>
        <button onClick = {categoryBooks}> Books</button>
        </div>

        <div className = 'questions'>
        <Question Questions={questionData[index]}/>
        <AnswerList answers={answerData[index]} correctAns ={correctAnsData[index]} index = {index} setResult = {setResult} setIndex = {setIndex}/>
        </div>
        </>
    )

    }
