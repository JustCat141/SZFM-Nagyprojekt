import React, { useState } from "react";
import QuestionList from "./QuestionList";
import { Button } from "../helper-functions/Button";

const QuestionnaireEditor = () => {
  const [questionList, setQuestionList] = useState([]);
  const [newQuestionId, setNewQuestionId] = useState(1); // Keep track of the new question IDs

  const handleNewQuestion = () => {
    // Create a new question with a unique ID and other properties
    const newQuestion = {
      id: newQuestionId,
      text: "New Question", // Replace with the default text for new questions
    };

    // Increment the new question ID for the next question
    setNewQuestionId(newQuestionId + 1);

    // Add the new question to the question list
    setQuestionList([...questionList, newQuestion]);
  };

  const handleSubmit = () => {
    // Handle the submission logic
    // You can send the questionList data or perform any other action
  };

  return (
    <div>
      <QuestionList questions={questionList} />
      <div>
        <Button text={"Új kérdés"} func={handleNewQuestion} />
        <Button text={"Kérdőív mentése"} func={handleSubmit} />
      </div>
    </div>
  );
};

export default QuestionnaireEditor;
