import Card from "../helper-functions/Card";
import OptionList from "./OptionList";
import classes from "../../styles/QuestionList.module.css";
const QuestionList = (props) => {
    const questions = props.questions;
    return <div className={classes["question-list-box"]}>
        {
            questions.map((question, index) => {
                return (
                    <Card key={index} >
                        <div className={classes["question-box"]}  style={{border : "thin solid red"}}>
                            <div className={classes["question-text"]}>Kérdés: {question.title}</div>
                            <div className={classes["question-text"]}>Leírás: {question.description}</div>
                            <OptionList options={question.quests}/>
                        </div>
                    </Card>
                )
            })
        }
        </div>;
};

export default QuestionList;