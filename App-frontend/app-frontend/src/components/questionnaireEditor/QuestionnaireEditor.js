import React, { useState } from "react";
import QuestionList from "./QuestionList";
import { Button } from "../helper-functions/Button";
import Card from "../helper-functions/Card";
import OptionList from "./OptionList";

const QuestionnaireEditor = () => {
  const [questionList, setQuestionList] = useState([]);
  const [newQuestionId, setNewQuestionId] = useState(1);

  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [newOptionText, setNewOptionText] = useState("");

  const handleNewQuestion = () => {
    const newQuestion = {
      id: newQuestionId,
      title: questionTitle,
      description: questionDescription,
      type: "one", // Default type (you can change it)
      answers: optionList, // Use the optionList as answers
    };

    setNewQuestionId(newQuestionId + 1);
    setQuestionList([...questionList, newQuestion]);

    // Reset the input fields for the next question
    setQuestionTitle("");
    setQuestionDescription("");
    setOptionList([]);
  };

  const handleNewOption = () => {
    // Add a new option to the optionList
    if (newOptionText) {
      setOptionList([...optionList, newOptionText]);
      setNewOptionText("");
    }
  };

  const handleSubmit = () => {
    // Handle the submission logic
    // You can send the questionList data or perform any other action
  };

  return (
    <div>
      <Card>
        <input
          name="title"
          placeholder="Questionnaire Title"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
        />
        <input
          name="desc"
          placeholder="Questionnaire Description"
          value={questionDescription}
          onChange={(e) => setQuestionDescription(e.target.value)}
        />
      </Card>
      <QuestionList questions={questionList} />
      <Card>
        <input
          name="question"
          placeholder="Question Text"
          value={newOptionText}
          onChange={(e) => setNewOptionText(e.target.value)}
        />
        <OptionList options={optionList} />
        <Button text={"Új válaszlehetőség"} func={handleNewOption} />
      </Card>
      <div>
        <Button text={"Új kérdés"} func={handleNewQuestion} />
        <Button text={"Kérdőív mentése"} func={handleSubmit} />
      </div>
    </div>
  );
};

export default QuestionnaireEditor;
