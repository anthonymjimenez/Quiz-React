import React, {useState, useEffect} from 'react'
import { AnswerList } from './AnswerList';
import { Question }  from './Question';
import { ScoreBoard } from './ScoreBoard';
import axios from 'axios';
import { Toggle } from './Toggle';

export const Quiz = () => {
  // hooks used in relation to API Call
    const [questionData, setQuestionData] = useState([]) 
    const [answerData, setAnsData] = useState([])
    const [correctAnsData, setCorrectAnsData] = useState([])
    
    const [loading, setLoading] = useState(null)
    const [fail, setFail] = useState(null)
    
    var [ difficulty, setDifficulty ] = useState('hard')
    var [category, setCategory] = useState('computers')
    
  // hooks used for game logic
    var [ index, setIndex ] = useState(0)
    var [ result, setResult ] = useState(null)
    var [right, setRight] = useState(0)

  const getData = async (diff, cat) => { //API call to a trivia database (diff, cat) -> strings that determine API call
        try {
          setLoading(true);
          const incomingData = await axios.get(`https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}&type=multiple`);
          setLoading(false);
          setQuestionData(incomingData.data.results.map(({ question }) => question));
          setAnsData(incomingData.data.results.map(({ incorrect_answers }) => incorrect_answers));
          setCorrectAnsData(incomingData.data.results.map(({ correct_answer }) => correct_answer)); 
        }
        catch (err) {
          setFail(true);
          console.error(err);
        }
  };

    useEffect(() => {
      // this useEffect listens for changes to difficulty and or category
      var categoryNumber;

      if(category === "video Games") { categoryNumber = 15;}
      else if(category === "computers") { categoryNumber = 18;}
      else if(category === "sports") { categoryNumber = 21;}
      else if(category === "books") { categoryNumber = 10;}
      // the api defines category in terms of numbers

      getData(difficulty, categoryNumber)
      // the call to getData makes a request on the triva API that implements template strings that
      // easily changes the API request to match user input
    },[difficulty, category])
    
   
    useEffect(() => {
      if(index === questionData.length || loading === true) { 
      // useEffect to reset the values that scoreboard implements
      setIndex(0);
      setRight(0);
      setResult(false);
    }}, [index, loading])
   
    if (fail) return "This application failed to connect to API Check your console for more error information!";
    if (loading) return "loading...";

    return (     
        <>
        <h2>Created by Anthony Jimenez</h2>
        <Toggle difficulty={difficulty} category={category} setDifficulty={setDifficulty} setCategory = {setCategory}/>
        <div className = 'border'>
        <ScoreBoard result={result} index={index} setRight = {setRight} right = {right} />
        <div className = 'questions'>
        <Question Questions={questionData[index]}/>
        <AnswerList answers={answerData[index]} correctAns ={correctAnsData[index]} index = {index} setResult = {setResult} setIndex = {setIndex}/>
        </div>
        </div>
        </>
    )

    }
