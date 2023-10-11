import React, { useState } from "react";
import QuestionList from "./QuestionList";
import { Button } from "../helper-functions/Button";
import Card from "../helper-functions/Card";
import OptionList from "./OptionList";

const QuestionnaireEditor = () => {
  const [questionList, setQuestionList] = useState([]);
  const [newQuestionId, setNewQuestionId] = useState(1);

  const [questionnaireTitle, setQuestionnaireTitle] = useState("");
  const [questionnaireDescription, setQuestionnaireDescription] = useState("");

  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [newOptionText, setNewOptionText] = useState("");

  const handleNewQuestion = () => {
    if (!questionTitle) {
      // Don't add a question without text
      return;
    }

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
    if (questionTitle && newOptionText) {
      // Only add an option if there's a question with text
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
          placeholder="Kérdőív címe"
          value={questionnaireTitle}
          onChange={(e) => setQuestionnaireTitle(e.target.value)}
        />
        <input
          name="desc"
          placeholder="Kérdőív leírása"
          value={questionnaireDescription}
          onChange={(e) => setQuestionnaireDescription(e.target.value)}
        />
      </Card>
      <QuestionList questions={questionList} />
      <Card>
        <input
          name="question"
          placeholder="Kérdés"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
        />
        <input
          name="question"
          placeholder="Kérdés leírása"
          value={questionDescription}
          onChange={(e) => setQuestionDescription(e.target.value)}
        />
        <Card>
        <OptionList options={optionList} />
        <input
          name="option"
          placeholder="Válaszlehetőség"
          value={newOptionText}
          onChange={(e) => setNewOptionText(e.target.value)}
          disabled={!questionTitle} // Disable the input when there's no question text
        />
        <Button
          text={"Új válaszlehetőség"}
          func={handleNewOption}
          disabled={!questionTitle} // Disable the button when there's no question text
        />
        </Card>
     
      </Card>
      <div>
        <Button text={"Új kérdés"} func={handleNewQuestion} />
        <Button text={"Kérdőív mentése"} func={handleSubmit} />
      </div>
    </div>
  );
};

export default QuestionnaireEditor;
