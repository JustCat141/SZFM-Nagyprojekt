import React from 'react';
import { useSelector } from 'react-redux';
import { classes } from '../../styles/UserQuestionnairesList.module.css'


const UserQuestionnairesList = () => {
    const UserQuestionnairesList = useSelector((state) => state.auth.UserQuestionnairesList);
    return (
        <div className={classes["UserQuestionnairesList-box"]}>
            <ul className={classes["UserQuestionnairesList-list"]}>
            {
                UserQuestionnairesList.forEach(questionnaire => {
                    return ( 
                        <li key={questionnaire.id}
                        className={classes["UserQuestionnairesList-list-item"]}>
                            <div  className={classes["UserQuestionnairesList-list-item-text"]}>
                                {questionnaire.title}
                            </div>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    );
}

export default UserQuestionnairesList;