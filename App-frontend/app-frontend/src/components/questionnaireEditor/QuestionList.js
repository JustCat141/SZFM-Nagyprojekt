import Card from "../helper-functions/Card";
import OptionList from "./OptionList";

const QuestionList = (props) => {
    const questions = props.questions;
    return <>
        {
            questions.map((question, index) => {
                return (
                    <Card key={index} >
                        <div style={{border : "thin solid red"}}>
                            <div>Kérdés: {question.title}</div>
                            <div>Leírás: {question.description}</div>
                            <OptionList options={question.quests}/>
                        </div>
                    
                    </Card>
                )
            })
        }
        </>;
};

export default QuestionList;