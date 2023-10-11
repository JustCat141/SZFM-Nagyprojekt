import { LoadForAnalyze } from "../helper-functions/LoadForAnalyze";
import Card from "../helper-functions/Card";


const QuestionnaireAnalyzer = () => {
    const Questionnaire = LoadForAnalyze(1551);
    console.log(Questionnaire);


    return (
        <div>Editor
            <Card>
                <p>{questionnaireData.title}</p>
                <p>{questionnaireData.desc}</p>
            </Card>
            


        </div>
    
    
    );



}

export default QuestionnaireAnalyzer;