import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../helper-functions/Card.js';
import './fill.css';
import { SendFill } from '../helper-functions/SendFill.js';
import { OpenDashboard } from '../global-states/authSlice';
import { Square, SquareOutline, Ellipse, EllipseOutline } from 'react-ionicons';
import { LoadForFill } from '../helper-functions/LoadForFill.js';

const QuestionnaireFill = (props) => {
  const [questionnaireData, setQuestionnaireData] = useState(props.data);
  const dispatch = useDispatch();
  const [activeAnswers, setActiveAnswers] = useState([]); // Initialize activeAnswers as an empty array
  const [inputFieldValues, setInputFieldValues] = useState([]);
  const [inputFieldErrors, setInputFieldErrors] = useState([]);
  const [multipleChoiceErrors, setMultipleChoiceErrors] = useState([]);

console.log(props);
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

    setActiveAnswers(newActiveAnswers);
    clearErrors(questionIndex);
  };



  const handleInputChange = (questionIndex, event) => {
    const newInputFieldValues = [...inputFieldValues];
    newInputFieldValues[questionIndex] = event.target.value;
    setInputFieldValues(newInputFieldValues);

    clearErrors(questionIndex);
  };

  const handleSubmit = async () => {
    if (!questionnaireData || !questionnaireData.quests) {
      alert('No questionnaire data found. Please try again later.');
      return;
    }

    const newInputFieldErrors = questionnaireData.quests.map(() => '');
    const newMultipleChoiceErrors = questionnaireData.quests.map(() => []);

    let anyFieldEmpty = false;

    inputFieldValues.forEach((value, index) => {
      if (value.trim() === '') {
        anyFieldEmpty = true;
        newInputFieldErrors[index] = 'This field is required.';
      }
    });

    setInputFieldErrors(newInputFieldErrors);

    activeAnswers.forEach((selectedAnswers, index) => {
      if (
        questionnaireData.quests[index].type === 'multiple' &&
        (!selectedAnswers || selectedAnswers.length === 0)
      ) {
        anyFieldEmpty = true;
        newMultipleChoiceErrors[index] = ['Please select at least one answer.'];
      } else if (
        questionnaireData.quests[index].type === 'one' &&
        (!selectedAnswers || selectedAnswers.length === 0)
      ) {
        anyFieldEmpty = true;
        newMultipleChoiceErrors[index] = ['Please select an answer.'];
      }
    });

    setMultipleChoiceErrors(newMultipleChoiceErrors);

    if (anyFieldEmpty) {
      alert('Please fill out all required fields before submitting.');
      return;
    }

    // Rest of your handleSubmit code for sending data...

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
