import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from '../../styles/UserQuestionnairesList.module.css';
import { OpenAnalyzer } from '../global-states/authSlice'; // Import your action

const UserQuestionnairesList = () => {
  const userQuestionnairesList = useSelector((state) => state.auth.UserQuestionnairesList);
  const dispatch = useDispatch(); // Initialize useDispatch

  const questionnaireOpen = (id) => {
    dispatch(OpenAnalyzer(id));

};

  return (
    <div className={classes["UserQuestionnairesList-box"]}>
      <ul className={classes["UserQuestionnairesList-list"]}>
        {userQuestionnairesList.length > 0 ? (
          userQuestionnairesList.map((questionnaire) => (
            <li
              key={questionnaire.id}
              onClick={() => questionnaireOpen(questionnaire.id)} // Use a function to pass the ID
              className={classes["UserQuestionnairesList-list-item"]}
            >
              <div className={classes["UserQuestionnairesList-list-item-text"]}>
                {questionnaire.name}
              </div>
            </li>
          ))
        ) : (
          <p>Nincs saját kérdéssorod, hozz létre egyet.</p>
        )}
      </ul>
    </div>
  );
};

export default UserQuestionnairesList;
