import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../helper-functions/Card.js';
import './fill.css';
import { SendFill } from '../helper-functions/SendFill.js';
import { OpenDashboard } from '../global-states/authSlice';
import { Square, SquareOutline, Ellipse, EllipseOutline } from 'react-ionicons';
import Error from "../helper-functions/Error.js";
import {Button} from "../helper-functions/Button.js";
import classes from "../../styles/QuestionnaireFill.module.css";

const QuestionnaireFill = (props) => {
  const [questionnaireData, setQuestionnaireData] = useState(props.currentForFill);
  const dispatch = useDispatch();
  const [activeAnswers, setActiveAnswers] = useState([]); // Initialize activeAnswers as an empty array
  const [inputFieldValues, setInputFieldValues] = useState([]);
  const [inputFieldErrors, setInputFieldErrors] = useState([]);
  const [multipleChoiceErrors, setMultipleChoiceErrors] = useState([]);
  
  const [questionErrors, setQuestionErrors] = useState([]);
  const [allGood, setAllGood] = useState(true);
  const [allAnswers, setAllAnswers] = useState([]);

  
  useEffect(() => {
    let AllGood = true;
    const errors = [];
    const answers = [];
    const questions = questionnaireData.quests;
    questions.forEach((question) => {
      errors.push(false);
      answers.push(null);
    });
    setQuestionErrors(errors);
    setAllAnswers(answers);
  }, []);

  const clearErrors = (questionIndex) => {
    setInputFieldErrors((prevErrors) => {
      const newErrors = [...prevErrors];
      newErrors[questionIndex] = '';
      return newErrors;
    });

    setMultipleChoiceErrors((prevErrors) => {
      const newErrors = [...prevErrors];
      newErrors[questionIndex] = [];
      return newErrors;
    });
  };

  const handleAnswerClick = (questionIndex, answerIndex) => {
    const newActiveAnswers = [...activeAnswers];
    const alls = [...allAnswers];
    if (!newActiveAnswers[questionIndex]) {
      newActiveAnswers[questionIndex] = []; // Initialize as an empty array if not already
    }

    if (questionnaireData.quests[questionIndex].type === 'one') {
      newActiveAnswers[questionIndex] = [answerIndex];
    } else if (questionnaireData.quests[questionIndex].type === 'multiple') {
      const answerIndexInArray = newActiveAnswers[questionIndex].indexOf(answerIndex);
      if (answerIndexInArray === -1) {
        newActiveAnswers[questionIndex].push(answerIndex);
      } else {
        newActiveAnswers[questionIndex].splice(answerIndexInArray, 1);
      }
    }
    if (newActiveAnswers[questionIndex].length === 0) {
      alls[questionIndex] = null;
    } else {
      alls[questionIndex] = newActiveAnswers[questionIndex];
    }

    setActiveAnswers(newActiveAnswers);
    setAllAnswers(alls);
    clearErrors(questionIndex);
  };
  
    const handleInputChange = (questionIndex, event) => {
    const newInputFieldValues = [...inputFieldValues];
    newInputFieldValues[questionIndex] = event.target.value;
    setInputFieldValues(newInputFieldValues);
    const alls = [...allAnswers];
    if (!newInputFieldValues[questionIndex][0]) {
      alls[questionIndex] = null;
    }
    else {
      alls[questionIndex] = newInputFieldValues;
    }
    setAllAnswers(alls);
    clearErrors(questionIndex);
  };

  const Check = () => {
    let allGood = true; // Initialize allGood to true
  
    allAnswers.forEach((answer) => {
      if (answer === null) {
        allGood = false; // Set allGood to false if any answer is null
      }
    });
  
    setAllGood(allGood); // Update the allGood state
  };
  


  const handleSubmit = () => {
    Check();
    if (!allGood) {
      return;
    } else {
      Send();
    }
  };

  const Send = async () => {
    try {
      const response = await SendFill({
        questionnaireDataId: questionnaireData.id,
        answers: {
          inputFieldValues,
          activeAnswers,
        },
      });

      dispatch(OpenDashboard());
    } catch (error) {
    }
  };

  if (!questionnaireData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes['questionnaire-page']}>
      <Card>
        <p className={classes['questionnaire-title']}>{questionnaireData.title}</p>
        <p  className={classes['questionnaire-description']}>{questionnaireData.desc}</p>
      </Card>
      <ul  className={classes['questionnaire-card-list']}>
        {questionnaireData.quests.map((question, questionIndex) => (
          <li key={questionIndex}
          className={classes['questionnaire-card-list-item']}>
            <Card>
              <div  className={classes['questionnaire-question-box']}>
                <p  className={classes['questionnaire-question-title']}>{question.question}</p>
                <p  className={classes['questionnaire-question-description']}>{question.description}</p>
                {Array.isArray(question.answers) ? (
                  <ul   className={classes['questionnaire-answers-list']}>
                    {question.answers.map((answer, answerIndex) => (
                      <li key={answerIndex}
                      className={classes['questionnaire-answers-list-item']}
                      >
                        <div
                          className={`answer ${
                            activeAnswers[questionIndex] &&
                            activeAnswers[questionIndex].includes(answerIndex)
                              ? "${classes['active']}"
                              : ''
                          }  `}
                          onClick={() => handleAnswerClick(questionIndex, answerIndex)}
                        >
                          {question.type === 'one' ? (
                            activeAnswers[questionIndex] &&
                            activeAnswers[questionIndex].includes(answerIndex) ? (
                              <Ellipse />
                            ) : (
                              <EllipseOutline />
                            )
                          ) : (
                            activeAnswers[questionIndex] &&
                            activeAnswers[questionIndex].includes(answerIndex) ? (
                              <Square />
                            ) : (
                              <SquareOutline />
                            )
                          )}
                          {answer}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className={classes["questionnaire-answer-type-box"]}>
                    <input
                    className={classes["questionnaire-answer-type-text"]}
                      type="text"
                      placeholder="Your answer"
                      value={inputFieldValues[questionIndex] || ''}
                      onChange={(event) => handleInputChange(questionIndex, event)}
                    />
                    {inputFieldErrors[questionIndex] && (
                      <Error text={`${inputFieldErrors[questionIndex]}`}/>
                    )}
                  </div>
                )}
                {multipleChoiceErrors[questionIndex] &&
                  multipleChoiceErrors[questionIndex].length > 0 && (
                    <Error text={`${multipleChoiceErrors[questionIndex][0]}`}/>
                  )}
                  {questionErrors[questionIndex] && <Error text={"Kérlek válaszold meg ezt a kérdést"}/>}
              </div>
            </Card>
          </li>
        ))}
      </ul>

      {!allGood && <Error text={"Kérlek tölts ki minden mezőt!"}/>}
      <Button func={handleSubmit} text={"Beküldés"}/>
    </div>
  );
};

export default QuestionnaireFill;
