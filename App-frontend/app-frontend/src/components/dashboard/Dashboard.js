import React from 'react';
import { useSelector } from 'react-redux';
import UserQuestionnairesList from './UserQuestionnairesList';
import { classes } from "../../styles/Dashboard.module.css";


function Dashboard() {
  // Use useSelector to access the user state from Redux store
  const user = useSelector((state) => state.auth.user);

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
                <div className={classes['dasboard-action-buttons']}>
                    <button className={classes['dashboard-button']}>Kérdőív keresése</button>
                    <button className={classes['dashboard-button']}>Kérdőív létrehozása</button>
                </div>
                <div className={classes['dashboard-main-page-title']}>Saját kérdéssorok</div>
                <div>
                    <UserQuestionnairesList />
                </div>



            </div>
        </div>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
}

export default Dashboard;
