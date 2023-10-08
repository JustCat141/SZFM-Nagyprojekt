import React from 'react';
import { useSelector } from 'react-redux';

const UserQuestionnairesList = () => {
    const UserQuestionnairesList = useSelector((state) => state.auth.UserQuestionnairesList);
    return (
        <div>
            <ul>
            {
                UserQuestionnairesList.forEach(questionnaire => {
                    return ( 
                        <li key={questionnaire.id}>
                            <div>
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