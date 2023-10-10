import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../helper-functions/Card.js';
import './fill.css';
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
    <div>
      Fill
      <Card>
        <p>{questionnaireData.title}</p>
        <p>{questionnaireData.desc}</p>
      </Card>
      <ul>
        {questions.map((question, questionIndex) => (
          <li key={question.q_id}>
            <Card>
              <div>
                <p>{question.question}</p>
                <p>{question.description}</p>
                {Array.isArray(question.answers) ? (
                  <ul>
                    {question.answers.map((answer, answerIndex) => (
                      <li
                        key={answerIndex}
                        className={`answer ${activeAnswers[questionIndex].includes(answerIndex) ? 'active' : ''}`}
                        onClick={() => handleAnswerClick(questionIndex, answerIndex)}
                      >
                        {answer}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <input
                    type="text"
                    placeholder="Your answer"
                    value={inputFieldValues[questionIndex]}
                    onChange={(event) => handleInputChange(questionIndex, event)}
                  />
                )}
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Beküldés</button>
    </div>
  );
};

export default QuestionnaireFill;
