import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'; // Import useState
import Card from "../helper-functions/Card.js";
import "./fill.css";

const QuestionnaireFill = () => {
  const questionnaireData = useSelector((state) => state.auth.CurrentForFill);
  const questions = questionnaireData.quests;

  // State to track the active answer for each question
  const [activeAnswers, setActiveAnswers] = useState(new Array(questions.length).fill(null));

  const handleAnswerClick = (questionIndex, answerIndex) => {
    // Clone the current activeAnswers array
    const newActiveAnswers = [...activeAnswers];
    
    // Set the clicked answer as active for the specified question
    newActiveAnswers[questionIndex] = answerIndex;

    // Update the state
    setActiveAnswers(newActiveAnswers);
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
                        className={answerIndex === activeAnswers[questionIndex] ? 'active' : ''}
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
    </div>
  );
}

export default QuestionnaireFill;
