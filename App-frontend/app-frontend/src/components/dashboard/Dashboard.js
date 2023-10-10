import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OpenEdit } from '../global-states/authSlice';
import UserQuestionnairesList from './UserQuestionnairesList';
import classes from "../../styles/Dashboard.module.css";
import Search from "../search/Search"

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const [searchisOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();

  const newQuestionnaireHandler = () => {
    dispatch(OpenEdit());
  }

  const questionnaireSearchHandler = () => {
    setIsSearchOpen(true); 
  }


  return (
    <div>
      {user ? (
        <div className={classes['dashboard-page']}>
            <div className={classes['dasboard-header']}>
                <div className={classes['dasboard-header-image-box']}>
                    <img className={classes['dasboard-header-image']} 
                     src=""/>
                </div>
            </div>
            <div className={classes['dasboard-main-page ']}>
              {searchisOpen ?<Search /> : <></>}
                <div className={classes['dasboard-action-buttons']}>
                    <button onClick={questionnaireSearchHandler} className={classes['dashboard-button']}>Kérdőív keresése</button>
                    <button onClick={newQuestionnaireHandler} className={classes['dashboard-button']}>Kérdőív létrehozása</button>
                </div>
                <div className={classes['dashboard-main-page-title']}>Saját kérdéssorok</div>
                <div>
                    <UserQuestionnairesList />
                </div>
            </div>
        </div>
      ) : (
        <p>No user found, try to reload the page</p>
      )}
    </div>
  );
}

export default Dashboard;
