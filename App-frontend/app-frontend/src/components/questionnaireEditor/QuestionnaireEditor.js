import React, { useState } from "react";
import QuestionList from "./QuestionList";
import { Button } from "../helper-functions/Button";
import Card from "../helper-functions/Card";
import OptionList from "./OptionList";
import { SendQuestionnaire } from "../helper-functions/SendQuestionnaire.js";
import {  useDispatch } from 'react-redux';
import { OpenDashboard } from '../global-states/authSlice';
import Error from "../helper-functions/Error";
import classes from "../../styles/QuestionnaireEditor.module.css"


const QuestionnaireEditor = () => {
  const dispatch = useDispatch();
  const [questionList, setQuestionList] = useState([]);
  const [newQuestionId, setNewQuestionId] = useState(1);
  const [isSavedTitle, setIsSavedTitle] = useState(false);

  const [mainTitleError, setMainTitleError] = useState(false);
  const [mainTitleIsAddedError, setMainTitleIsAddedError] = useState(false);

  const [questionnaireTitle, setQuestionnaireTitle] = useState("");
  const [questionnaireDescription, setQuestionnaireDescription] = useState("");

  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [newOptionText, setNewOptionText] = useState("");
  const [questionType, setQuestionType] = useState("one"); // Default question type
  const [isOptionListHidden, setIsOptionListHidden] = useState(false);

  const [optionNameError, setOptionNameError] = useState(false);
  const [optionNumberError, setOptionNumberError] = useState(false);
  const [questionTitleError, setQuestionTitleError] = useState(false);
  const [questionNumberError, setQuestionNumberError] = useState(false);
  

  const questionTypes = [
    { label: "egy válaszos", value: "one" },
    { label: "több válaszos", value: "multiple" },
    { label: "szöveg mező", value: "type" },
  ];

  const setQuestion = () => {
    const newQuestion = {
      id: newQuestionId,
      title: questionTitle,
      description: questionDescription,
      type: questionType,
      answers: isOptionListHidden ? [] : optionList,
    };

    setNewQuestionId(newQuestionId + 1);
    setQuestionList([...questionList, newQuestion]);

    setQuestionTitle("");
    setQuestionDescription("");
    setOptionList([]);
    setIsOptionListHidden(false);
  }

  const handleNewQuestion = () => {
    if (!questionTitle) {
      setQuestionTitleError(true);
      return;
    }

    if (optionList.length > 0) {
      setQuestion();
    } else {
      if (questionType !== "type") {
      setOptionNumberError(true);
      return;
      }
      else {
        setQuestion();
      }
    }
  };

  const handleNewOption = () => {
    if (questionTitle && newOptionText) {
      setOptionList([...optionList, newOptionText]);
      setOptionNameError(false);
      setNewOptionText("");
      setOptionNumberError(false);
      setOptionNameError(false);
    }
    else {
      setOptionNameError(true);
    }
  };

  const submit = () => {
    const questionnaire = {
      title: questionnaireTitle,
      desc: questionnaireDescription,
      questions: questionList,
    };

    SendQuestionnaire(questionnaire);
    
    dispatch(OpenDashboard());
  }

  const handleSubmit = () => {
    if (isSavedTitle) {

      
      if (questionList.length > 0) {
        submit();
      }
      else {
        setQuestionNumberError(true);
        return;
      }
    }
    else {
      setMainTitleIsAddedError(true);
      return;
    }
  };

  const mainTitleSaveHandler = () => {
    if (questionnaireTitle) {
      setMainTitleError(false);
      setIsSavedTitle(true);
      setMainTitleIsAddedError(false); 
    } else {
      setMainTitleError(true);
    }
  };

  return (
    <div>
      <Card>{isSavedTitle &&
        <div>
          <p>{questionnaireTitle}</p>
          {questionDescription &&
          <p>{questionnaireDescription}</p>}
        </div>}
        {!isSavedTitle ? (
          <div>
            <input
              name="title"
              placeholder="Kérdőív címe"
              value={questionnaireTitle}
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setMainTitleError(false);
                }
                setQuestionnaireTitle(e.target.value)
              }}
            />
            <input
              name="desc"
              placeholder="Kérdőív leírása"
              value={questionnaireDescription}
              onChange={(e) => setQuestionnaireDescription(e.target.value)}
            />
            {mainTitleError && <Error text={"A kérdőív címe kötelező"}/>}
            <Button
              text={"Kérdőív cím és leírás rögzítése"}
              func={mainTitleSaveHandler}
            />
          </div>
        ) : <div></div>}
      </Card>

       {questionList && <QuestionList questions={questionList}/>}
              
      <Card>
        <div>
        <input
          name="question"
          placeholder="Kérdés"
          value={questionTitle}
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setQuestionTitleError(false);
            }
            setQuestionTitle(e.target.value);
          }}
        />
        <input
          name="description"
          placeholder="Kérdés leírása"
          value={questionDescription}
          onChange={(e) => setQuestionDescription(e.target.value)}
        />
        </div>
        <div>
          <label>Kérdés típusa:</label>
          <select
  value={questionType}
  onChange={(e) => {
    setQuestionType(e.target.value);
    if (e.target.value === "type") {
      setIsOptionListHidden(true);
    } else {
      setIsOptionListHidden(false);
    }
  }}
>
  {questionTypes.map((type) => (
    <option key={type.value} value={type.value}>
      {type.label}
    </option>
  ))}

</select>

        </div>
        {!isOptionListHidden && questionType !== "type" && ( // Conditionally render OptionList based on visibility
          <Card>
            <div>
              <OptionList options={optionList} />
            </div>
            <div>

            <input
              name="option"
              placeholder="Válaszlehetőség"
              value={newOptionText}
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setOptionNameError(false);
                }
                setNewOptionText(e.target.value)}}
              disabled={!questionTitle}
            />
            {optionNameError && <Error text={"Kérlek írj válaszlehetőséget"}/>}
        
            <Button
              text={"Új válaszlehetőség"}
              func={handleNewOption}
              disabled={!questionTitle}
            />
            </div>

          </Card>
        )}
      </Card>
      <div>
        {questionTitleError && <Error text={"Kérlek adj kérdést"}/>}
        {optionNumberError && <Error text={"Kérlek adj hozzá további válaszlehetőségeket"}/>}
        <Button text={"Új kérdés"} func={handleNewQuestion} />

        {mainTitleIsAddedError && <Error text={"Kérlek nevezd el a kérdőívet"}/>}
        {questionNumberError && <Error text={"Kérlek adj hozzá kérdést"}/>}
        
        <Button text={"Kérdőív mentése"} func={handleSubmit} />
      </div>
    </div>
  );
};

export default QuestionnaireEditor;
