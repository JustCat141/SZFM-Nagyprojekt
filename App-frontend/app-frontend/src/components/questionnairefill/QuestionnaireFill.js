import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../helper-functions/Card.js';
import './fill.css';
import classes from "../../styles/QuestionnaireFill.module.css";
import { SendFill } from '../helper-functions/SendFill.js';
import { OpenDashboard } from '../global-states/authSlice';

const QuestionnaireFill = () => {
  const questionnaireData = useSelector((state) => state.auth.CurrentForFill);
  const questions = questionnaireData.quests;

  const dispatch = useDispatch();
  const [activeAnswers, setActiveAnswers] = useState(questions.map(() => []));
  const [inputFieldValues, setInputFieldValues] = useState(questions.map(() => ''));

  const handleAnswerClick = (questionIndex, answerIndex) => {
    const newActiveAnswers = [...activeAnswers];

    if (questions[questionIndex].type === 'one') {
      newActiveAnswers[questionIndex] = [answerIndex];
    } else if (questions[questionIndex].type === 'multiple') {
      const answerIndexInArray = newActiveAnswers[questionIndex].indexOf(answerIndex);
      if (answerIndexInArray === -1) {
        newActiveAnswers[questionIndex].push(answerIndex);
      } else {
        newActiveAnswers[questionIndex].splice(answerIndexInArray, 1);
      }
    }

    setActiveAnswers(newActiveAnswers);
  };

  const handleInputChange = (questionIndex, event) => {
    const newInputFieldValues = [...inputFieldValues];
    newInputFieldValues[questionIndex] = event.target.value;
    setInputFieldValues(newInputFieldValues);
  };

  const handleSubmit = () => {
    // Collect all the answers and input field values
    const collectedAnswers = questions.map((question, qIndex) => {
      if (activeAnswers[qIndex].length > 0) {
        if (question.type === 'one') {
          return question.answers[activeAnswers[qIndex][0]];
        } else if (question.type === 'multiple') {
          return activeAnswers[qIndex].map((index) => question.answers[index]);
        }
      } else if (question.type === 'type') {
        return inputFieldValues[qIndex]; // Include the input field value
      }

      // Handle cases where there are no selected answers and no input field value
      return null;
    });

    // Remove null values from collectedAnswers
    const filteredAnswers = collectedAnswers.filter((answer) => answer !== null);

    // Log the collected answers and input field values to the console for debugging
    console.log('Collected Answers:', filteredAnswers);
    console.log('Input Field Values:', inputFieldValues);

    // Call the SendFill function
    SendFill({ questionnaireDataId: questionnaireData.id, answers: filteredAnswers });

    // Dispatch the OpenDashboard action when the submission is complete
    dispatch(OpenDashboard());
  };

  return (
    <div className={classes['questionnaire-page']}>
      Fill
      <Card className={classes['questionnaire-header-card']}>
        <p className={classes['questionnaire-title']}>{questionnaireData.title}</p>
        <p className={classes['questionnaire-description']}>{questionnaireData.desc}</p>
      </Card>
      <ul className={classes['questionnaire-card-list']}>
        {questions.map((question, questionIndex) => (
          <li key={question.q_id}
          className={classes['questionnaire-card-list-item']}>
            <Card className={classes['questionnaire-question-card']}>
              <div className={classes['questionnaire-question-box']}>
                <p className={classes['questionnaire-question-title']}>{question.question}</p>
                <p className={classes['questionnaire-question-description']}>{question.description}</p>
                {Array.isArray(question.answers) ? (
                  <ul className={classes['questionnaire-answers-list']}>
                    {question.answers.map((answer, answerIndex) => (
                      <li
                        key={answerIndex}
                        className={`questionnaire-answers-list-item ${activeAnswers[questionIndex].includes(answerIndex) ? 'active' : ''}`}
                        onClick={() => handleAnswerClick(questionIndex, answerIndex)}
                      >
                        <p className={classes['questionnaire-answer-text']}>
                            {answer}
                            </p>
                      </li>
                    ))}
                  </ul>
                ) : (

                    <div className={classes['questionnaire-answer-type-box']}>
                  <input
                  className={classes['questionnaire-answers-type-text']}
                  type="text"
                  placeholder="Your answer"
                  value={inputFieldValues[questionIndex]}
                  onChange={(event) => handleInputChange(questionIndex, event)}
                  />
                  </div>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <div className={classes['questionnaire-button-box ']}>
      <button 
       className={classes['questionnaire-button-text']}
      onClick={handleSubmit}>Beküldés</button>

      </div>
    </div>
  );
};

export default QuestionnaireFill;
