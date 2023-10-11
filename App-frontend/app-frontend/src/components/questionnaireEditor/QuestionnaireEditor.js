import React, { useState } from "react";
import QuestionList from "./QuestionList";
import { Button } from "../helper-functions/Button";
import Card from "../helper-functions/Card";
import OptionList from "./OptionList";
import {SendQuestionnaire} from "../helper-functions/SendQuestionnaire.js";

const QuestionnaireEditor = () => {
  const [questionList, setQuestionList] = useState([]);
  const [newQuestionId, setNewQuestionId] = useState(1);
  const [isSavedTitle, setIsSavedTitle] = useState(false);

  const [questionnaireTitle, setQuestionnaireTitle] = useState("");
  const [questionnaireDescription, setQuestionnaireDescription] = useState("");

  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [newOptionText, setNewOptionText] = useState("");
  const [questionType, setQuestionType] = useState("type"); // Default question type
  const [isOptionListHidden, setIsOptionListHidden] = useState(false);

  const questionTypes = ["one", "multiple", "type"]; // Add more types as needed

  const handleNewQuestion = () => {
    if (!questionTitle) {
      return;
    }

    const newQuestion = {
      id: newQuestionId,
      title: questionTitle,
      description: questionDescription,
      type: questionType,
      answers: isOptionListHidden ? [] : optionList,
    };


    setNewQuestionId(newQuestionId + 1);
    setQuestionList([...questionList, newQuestion]);

    // Reset the input fields for the next question
    setQuestionTitle("");
    setQuestionDescription("");
    setOptionList([]);
    setIsOptionListHidden(false); // Reset the option list visibility
    
  };

  const handleNewOption = () => {
    if (questionTitle && newOptionText) {
      setOptionList([...optionList, newOptionText]);
      setNewOptionText("");
    }
  };

  const handleSubmit = () => {
    const questionnaire = {
      title: questionnaireTitle,
      desc: questionnaireDescription,
      questions: questionList,
    };
  
    SendQuestionnaire(questionnaire);
  };
  

  const mainTitleSaveHandler = () => {
    setIsSavedTitle(true);
  }

  return (
    
    <div>
      <Card>
        <div>
          <p>{questionnaireTitle}</p>
          <p>{questionnaireDescription}</p>
        </div>
        {!isSavedTitle ? (
          <div>
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
            <Button text={"Kérdőív cím és leírás rögzítése"} func={mainTitleSaveHandler} />
          </div>
        ) : <div></div>
        }
      </Card>
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
        <div>
          <label>Question Type:</label>
          <select
            value={questionType}
            onChange={(e) => {
              setQuestionType(e.target.value);
              // Check if the OptionList should be hidden
              if (e.target.value === "type") {
                setIsOptionListHidden(true);
              } else {
                setIsOptionListHidden(false);
              }
            }}
          >
            {questionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {!isOptionListHidden && questionType !== "type" && ( // Conditionally render OptionList based on visibility
          <Card>
            <OptionList options={optionList} />
            <input
              name="option"
              placeholder="Válaszlehetőség"
              value={newOptionText}
              onChange={(e) => setNewOptionText(e.target.value)}
              disabled={!questionTitle}
            />
            <Button
              text={"Új válaszlehetőség"}
              func={handleNewOption}
              disabled={!questionTitle}
            />
          </Card>
        )}
      </Card>
      <div>
        <Button text={"Új kérdés"} func={handleNewQuestion} />
        <Button text={"Kérdőív mentése"} func={handleSubmit} />
      </div>
    </div>
  );
};

export default QuestionnaireEditor;
