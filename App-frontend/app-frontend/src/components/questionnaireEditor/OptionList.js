import Card from "../helper-functions/Card";
import classes from "../../styles/OptionList.module.css";

const OptionList = (props) => {
    const {options} = props;
    if (options.length > 0) {
        return (
        <div className={classes['option-list-box']}>
            {
                options.map((option, index) => {
                    return (
                        <Card key={index}>
                            <div className={classes['option-box']}>
                                <div className={classes['option-icon']}></div>
                                <p className={classes['option-text']}>{option}</p>
                            </div>
                        </Card>
                    );
                })
            }
        </div>
    );}
    return;
};

export default OptionList;
