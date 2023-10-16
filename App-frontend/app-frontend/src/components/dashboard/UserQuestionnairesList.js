import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from '../../styles/UserQuestionnairesList.module.css';
import { OpenAnalyzer } from '../global-states/authSlice'; // Import your action

const UserQuestionnairesList = () => {
  const userQuestionnairesList = useSelector((state) => state.auth.UserQuestionnairesList);
  const dispatch = useDispatch(); // Initialize useDispatch
  console.log(userQuestionnairesList);
  const questionnaireOpen = (id) => {
    dispatch(OpenAnalyzer(id));

};

return (
  <div className={classes['UserQuestionnairesList-box']}>
    <ul className={classes['UserQuestionnairesList-list']}>
  {userQuestionnairesList && userQuestionnairesList.length > 0 ? (
    userQuestionnairesList.map((questionnaire, questionnaireIndex) => (
      <li
        key={questionnaireIndex}
        onClick={() => questionnaireOpen(questionnaire.id)}
        className={classes['UserQuestionnairesList-list-item']}
      >
        <div className={classes['UserQuestionnairesList-list-item-text']}>
          {questionnaire.title}
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
