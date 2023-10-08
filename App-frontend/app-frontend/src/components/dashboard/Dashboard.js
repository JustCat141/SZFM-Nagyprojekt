import React from 'react';
import { useSelector } from 'react-redux';
import UserQuestionnairesList from './UserQuestionnairesList';
import { classes } from '../../styles/Dashboard.module.css';

function Dashboard() {
  // Use useSelector to access the user state from Redux store
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <div>
            <div>
                <div>
                    <img 
                     src=""/>
                </div>
            </div>
            <div>
                <div>
                    <button>Kérdőív keresése</button>
                    <button>Kérdőív létrehozása</button>
                </div>
                <div>Saját kérdéssorok</div>
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
