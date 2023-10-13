import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../helper-functions/Card.js';
import './fill.css';
import { SendFill } from '../helper-functions/SendFill.js';
import { OpenDashboard } from '../global-states/authSlice';
import { Square, SquareOutline, Ellipse, EllipseOutline } from 'react-ionicons';
import Error from "../helper-functions/Error.js";
import {Button} from "../helper-functions/Button.js";
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
      console.log(answer);
      if (answer === null) {
        console.log("No answer");
        allGood = false; // Set allGood to false if any answer is null
      }
    });
  
    setAllGood(allGood); // Update the allGood state
  };
  


  const handleSubmit = () => {
    Check();
    console.log(allGood);
    if (!allGood) {
      console.log("no answers")
      return;
    } else {
      console.log(allAnswers);
      console.log(allGood);
      Send();
    }
  };

  const Send = async () => {
    console.log('Sending Data...');
    try {
      const response = await SendFill({
        questionnaireDataId: questionnaireData.id,
        answers: {
          inputFieldValues,
          activeAnswers,
        },
      });
      console.log('Data Sent Successfully', response);

      dispatch(OpenDashboard());
    } catch (error) {
      console.error('Error Sending Data:', error);
      alert('An error occurred while sending data. Please try again later.');
    }
  };

  if (!questionnaireData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Fill
      <Card>
        <p>{questionnaireData.title}</p>
        <p>{questionnaireData.desc}</p>
      </Card>
      <ul>
        {questionnaireData.quests.map((question, questionIndex) => (
          <li key={question.q_id}>
            <Card>
              <div>
                <p>{question.question}</p>
                <p>{question.description}</p>
                {Array.isArray(question.answers) ? (
                  <ul>
                    {question.answers.map((answer, answerIndex) => (
                      <li key={answerIndex}>
                        <div
                          className={`answer ${
                            activeAnswers[questionIndex] &&
                            activeAnswers[questionIndex].includes(answerIndex)
                              ? 'active'
                              : ''
                          }`}
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
                  <div>
                    <input
                      type="text"
                      placeholder="Your answer"
                      value={inputFieldValues[questionIndex] || ''}
                      onChange={(event) => handleInputChange(questionIndex, event)}
                    />
                    {inputFieldErrors[questionIndex] && (
                      <p className="error-message">{inputFieldErrors[questionIndex]}</p>
                    )}
                  </div>
                )}
                {multipleChoiceErrors[questionIndex] &&
                  multipleChoiceErrors[questionIndex].length > 0 && (
                    <p className="error-message">{multipleChoiceErrors[questionIndex][0]}</p>
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
