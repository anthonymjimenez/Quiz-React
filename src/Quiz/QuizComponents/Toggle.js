import React, { useState } from "react";
import axios from "axios";
import ToggleHeader from "./ToggleHeader";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

//toggle logic and toggle container ?? time to split up
export const Toggle = ({ setQuestionData, setToggleView, setLoading }) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState(18);
  const [questionAmount, setQuestionAmount] = useState(10);
  const [questionType, setQuestionType] = useState("multiple");
  const [bonus, setBonus] = useState(0);
  // make getData in Toggle and use DataHooks as props
  const getData = async (difficulty, category, amount, type, bonus) => {
    try {
      setLoading(true);
      const incomingData = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
      );
      setQuestionData({
        questions: [...incomingData.data.results],
        bonus: bonus,
        index: 0,
      });
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ToggleHeader />
      <Form
        // reset game data
        onSubmit={(e) => {
          e.preventDefault();
          getData(difficulty, category, questionAmount, questionType, bonus);
          setToggleView(false);
        }}
      >
        <FormGroup row>
          <Label>Choose difficulty: </Label>
          <Input
            type="select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Input>
        </FormGroup>

        <FormGroup row>
          <Label>Choose category: </Label>
          <Input
            type="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value={0}>General Knowledge</option>
            <option value={18}>Computers</option>
            <option value={15}>Video Games</option>
            <option value={10}>Books</option>
            <option value={21}>Sports</option>
            <option value={20}>Mythology</option>
            <option value={27}>Animals</option>
          </Input>
        </FormGroup>

        <FormGroup row>
          <Label>Choose Quiz Length: </Label>
          <Input
            type="select"
            value={questionAmount}
            onChange={(e) => setQuestionAmount(e.target.value)}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </Input>
        </FormGroup>

        <FormGroup row>
          <Label>Choose Quiz Type: </Label>
          <Input
            type="select"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True or False</option>
          </Input>
        </FormGroup>

        {/* <FormGroup row>
          <Label>Choose Bonus Amount: </Label>
          <Input
            type="number"
            value={questionType}
            onChange={(e) => setBonus(e.target.value)}
          ></Input>
        </FormGroup> */}

        <Button color="primary">Submit</Button>
      </Form>
    </>
  );
};
