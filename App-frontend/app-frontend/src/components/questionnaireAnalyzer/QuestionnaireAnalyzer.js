import { LoadForAnalyze } from "../helper-functions/LoadForAnalyze";
import Card from "../helper-functions/Card";
import Chart from "../helper-functions/Chart";
import { useDispatch } from 'react-redux';
import { OpenDashboard } from '../global-states/authSlice';
import { Button } from "../helper-functions/Button";
import { useEffect, useState } from "react";
import classes from "../../styles/Analyzer.module.css"

const QuestionnaireAnalyzer = (id) => {
  const [questionnaireData, setQuestionnaireData] = useState(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(OpenDashboard());
  }

  useEffect(() => {
    async function fetchQuestionnaireData() {
      try {
        const data = await LoadForAnalyze(1551);
        setQuestionnaireData(data);
      } catch (error) {
        console.error('Error fetching questionnaire data:', error);
      }
    }

    fetchQuestionnaireData();
  }, []);

  if (!questionnaireData) {
    return <div>Loading...</div>; 
  }

  const questions = questionnaireData.quests;

  return (
    <div className={classes['analyzer-page']}>
      <Card>
        <p className={classes['main-text']}>{questionnaireData.title}</p>
        <p className={classes['main-text']}>{questionnaireData.desc}</p>
      </Card>

      <ul className={classes["question-list"]}>
        {questions.map((question, questionIndex) => (
          <li key={questionIndex}
            className={classes['question-list-item']}>
            <Card>
              <div className={classes['question-box']}>
                <p className={classes['quesiton-text']}>{question.question}</p>
                <div className={classes['answer-list']}>
                {question.type === "type" ? (
                  question.given_answers.map((answer, answerIndex) => (
                    <Card key={answerIndex}>
                      <p className={classes['answer-text']}>{answer}</p>
                    </Card>
                  ))
                ) : (
                  question.answers.map((answer, answerIndex) => (
                    <div>
                      <div>{answer}</div>
                    <Chart key={answerIndex} answerText={answer}
                    answerNumber={question.given_answers[answerIndex]} />
                    </div>
                  )))
                }
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <Button func={handleClose} text={'Bezárás'} />
    </div>
  );
};

export default QuestionnaireAnalyzer;
