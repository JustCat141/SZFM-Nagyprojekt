import { LoadForAnalyze } from "../helper-functions/LoadForAnalyze";
import Card from "../helper-functions/Card";
import Chart from "../helper-functions/Chart";


const QuestionnaireAnalyzer = () => {
  const questionnaireData = LoadForAnalyze(1551);
  console.log(questionnaireData);
  const questions = questionnaireData.quests;

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
                    asnwerNumber={question.given_answers[answerIndex]} />
                  )))
                }
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionnaireAnalyzer;
