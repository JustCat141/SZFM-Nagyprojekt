import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../helper-functions/Card.js';
import './fill.css';
import { SendFill } from '../helper-functions/SendFill.js';
import { OpenDashboard } from '../global-states/authSlice';
import { Square, SquareOutline, Ellipse, EllipseOutline } from 'react-ionicons'


const QuestionnaireFill = () => {
  const questionnaireData = useSelector((state) => state.auth.CurrentForFill);
  const questions = questionnaireData.quests;

  const dispatch = useDispatch();
  const [activeAnswers, setActiveAnswers] = useState(questions.map(() => []));
  const [inputFieldValues, setInputFieldValues] = useState(questions.map(() => ''));
  const [inputFieldErrors, setInputFieldErrors] = useState(questions.map(() => ''));
  const [multipleChoiceErrors, setMultipleChoiceErrors] = useState(questions.map(() => []));

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

    // Clear the error for this question when an answer is selected
    clearErrors(questionIndex);
  };

  const handleInputChange = (questionIndex, event) => {
    const newInputFieldValues = [...inputFieldValues];
    newInputFieldValues[questionIndex] = event.target.value;
    setInputFieldValues(newInputFieldValues);

    // Clear the error for this input field when the input field is filled
    clearErrors(questionIndex);
  };

  const clearErrors = (questionIndex) => {
    // Clear errors for the given question
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

  const handleSubmit = async () => {
    // Create separate arrays for error states for each type of question
    const newInputFieldErrors = questions.map(() => '');
    const newMultipleChoiceErrors = questions.map(() => []);

    // Initialize anyFieldEmpty to true
    let anyFieldEmpty = true;

    // Check if any input fields are empty and set error states
    inputFieldValues.forEach((value, index) => {
      if (value === '') {
        anyFieldEmpty = false; // At least one field is empty
        newInputFieldErrors[index] = 'This field is required.';
      }
    });

    // Update error states for input fields
    setInputFieldErrors(newInputFieldErrors);

    // Check if any multiple choice questions have no selected answers and set error states
    activeAnswers.forEach((selectedAnswers, index) => {
      if (questions[index].type === 'multiple' && selectedAnswers.length === 0) {
        anyFieldEmpty = false; // At least one multiple choice question is unanswered
        newMultipleChoiceErrors[index] = ['Please select at least one answer.'];
      } else if (questions[index].type === 'one' && selectedAnswers.length === 0) {
        anyFieldEmpty = false; // At least one one-choice question is unanswered
        newMultipleChoiceErrors[index] = ['Please select an answer.'];
      }
    });

    // Update error states for multiple choice questions
    setMultipleChoiceErrors(newMultipleChoiceErrors);


    // Check if all questions are answered
    const allQuestionsAnswered = questions.every((question, index) => {
      if (question.type === 'type' && inputFieldValues[index] === '') {
        return false; // Input field is empty
      } else if (question.type !== 'type' && activeAnswers[index].length === 0) {
        return false; // No answer selected for non-input field
      }
      return true;
    });

    if (!allQuestionsAnswered) {
      // Display an error message if not all questions are answered
      alert('Please answer all questions before submitting.');
      return;
    }

    // Collect all the answers and input field values
    const collectedAnswers = questions.map((question, qIndex) => {
      if (activeAnswers[qIndex].length > 0) {
        if (question.type === 'one') {
          return question.answers[activeAnswers[qIndex][0]];
        } else if (question.type === 'multiple') {
          return activeAnswers[qIndex].map((index) => question.answers[index]);
        }
      } else if (question.type === 'input') {
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

    // Attempt to send data using SendFill
    console.log('Sending Data...');
    try {
      const response = await SendFill({ questionnaireDataId: questionnaireData.id, answers: filteredAnswers });
      console.log('Data Sent Successfully', response);

      // Dispatch the OpenDashboard action when the submission is complete
      dispatch(OpenDashboard());
    } catch (error) {
      console.error('Error Sending Data:', error);
      alert('An error occurred while sending data. Please try again later.');
    }
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
     <li key={answerIndex}>
       <div
         className={`answer ${activeAnswers[questionIndex].includes(answerIndex) ? 'active' : ''}`}
         onClick={() => handleAnswerClick(questionIndex, answerIndex)}
       >
         {question.type === 'one' ? (
           activeAnswers[questionIndex].includes(answerIndex) ? (
             <Ellipse /> // Active "one" type question
           ) : (
             <EllipseOutline /> // Inactive "one" type question
           )
         ) : (
           activeAnswers[questionIndex].includes(answerIndex) ? (
             <Square /> // Active "multiple" type question
           ) : (
             <SquareOutline /> // Inactive "multiple" type question
           )
         ) }{answer} 
       </div>
     </li>
   ))}
 </ul>


) : (
                  <div>
                    <input
                      type="text"
                      placeholder="Your answer"
                      value={inputFieldValues[questionIndex]}
                      onChange={(event) => handleInputChange(questionIndex, event)}
                    />
                    {inputFieldErrors[questionIndex] && (
                      <p className="error-message">{inputFieldErrors[questionIndex]}</p>
                    )}
                  </div>
                )}
                {multipleChoiceErrors[questionIndex].length > 0 && (
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
