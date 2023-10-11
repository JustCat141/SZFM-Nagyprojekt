import { LoadForAnalyze } from "../helper-functions/LoadForAnalyze";
import Card from "../helper-functions/Card";
import Chart from "../helper-functions/Chart";
import {  useDispatch } from 'react-redux';
import { OpenDashboard } from '../global-states/authSlice';
import { Button } from "../helper-functions/Button";


const QuestionnaireAnalyzer = (id) => {
  const dispatch = useDispatch();
  const questionnaireData = LoadForAnalyze(id);
  console.log(questionnaireData);
  const questions = questionnaireData.quests;

  const handleClose = () => {
    dispatch(OpenDashboard());
  }

  return (
    <div>
      Analyzer
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
                {question.type === "type" ? (
                  question.given_answers.map((answer, answerIndex) => (
                    <Card key={answerIndex}>
                      <p>{answer}</p>
                    </Card>
                  ))
                ) : (
                  question.answers.map((answer, answerIndex) => (
                    <Chart key={answerIndex} answerText={answer} 
                    answerNumber={question.given_answers[answerIndex]} />
                  )))
                }
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <Button func={handleClose} text={'Bezárás'}/>
    </div>
  );
};

export default QuestionnaireAnalyzer;
