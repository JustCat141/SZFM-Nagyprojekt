import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'; // Import useState
import Card from "../helper-functions/Card.js";
import './fill.css'; // Import the fill.css file
import { SendFill } from '../helper-functions/SendFill.js';
const QuestionnaireFill = () => {
  const questionnaireData = useSelector((state) => state.auth.CurrentForFill);
  const questions = questionnaireData.quests;

  // State to track the active answers for each question
  const [activeAnswers, setActiveAnswers] = useState(questions.map(() => []));

  // State to store all the answers
  const [answers, setAnswers] = useState([]);

  const handleAnswerClick = (questionIndex, answerIndex) => {
    // Clone the current activeAnswers array
    const newActiveAnswers = [...activeAnswers];
    
    // If the question type is 'one', replace the previous active answers
    if (questions[questionIndex].type === 'one') {
      newActiveAnswers[questionIndex] = [answerIndex];
    } else if (questions[questionIndex].type === 'multiple') {
      // If the question type is 'multiple', toggle the active answer
      const answerIndexInArray = newActiveAnswers[questionIndex].indexOf(answerIndex);
      if (answerIndexInArray === -1) {
        newActiveAnswers[questionIndex].push(answerIndex); // Select the answer
      } else {
        newActiveAnswers[questionIndex].splice(answerIndexInArray, 1); // Deselect the answer
      }
    }

    // Update the state
    setActiveAnswers(newActiveAnswers);

    // Collect all the answers
    const collectedAnswers = questions.map((question, qIndex) => {
      if (newActiveAnswers[qIndex].length === 0) {
        return null; // No answer selected for this question
      }

      if (question.type === 'one') {
        return question.answers[newActiveAnswers[qIndex][0]]; // Single choice answer
      } else if (question.type === 'multiple') {
        return newActiveAnswers[qIndex].map((index) => question.answers[index]); // Multiple choice answers
      }
    });

    setAnswers(collectedAnswers.filter((answer) => answer !== null));
  };

  const handleSubmit = () => {
    // Now, the 'answers' state contains all the selected answers for each question
    // You can send this 'answers' array to your server using the 'SendFill' function
    SendFill({ questionnaireDataId: questionnaireData.id, answers });
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
                        onClick={() => handleAnswerClick(questionIndex, answerIndex)} // Handle click
                      >
                        {answer}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <input
                    type="text"
                    placeholder="Your answer"
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
}

export default QuestionnaireFill;
