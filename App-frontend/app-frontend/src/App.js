import React from 'react';
import { useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/global-states/authSlice';
import Login from './components/login-page/Login'; // Import your Login component
import Dashboard from './components/dashboard/Dashboard';
import QuestionnaireAnalyzer from './components/questionnaireAnalyzer/QuestionnaireAnalyzer';
import QuestionnaireFill from "./components/questionnairefill/QuestionnaireFill";
import QuestionnaireEditor from './components/questionnaireEditor/QuestionnaireEditor';  
import Register from './components/Register/Register';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isOpenForAnalyze = useSelector((state) => state.auth.isOpenForAnalyze);
  const isOpenForFill = useSelector((state) => state.auth.isOpenForFill);
  const CurrentForFill = useSelector((state) => state.auth.CurrentForFill);
  const isOpenForEdit = useSelector((state) => state.auth.isOpenForEdit);
  const isRegistering = useSelector((state) => state.auth.isRegistering);

  
  return (<>
      {isLoggedIn ? (
        (
          isOpenForAnalyze === true 
        ? 
        <QuestionnaireAnalyzer />
        : (
            isOpenForFill 
              ?
                <QuestionnaireFill currentForFill={CurrentForFill}/>
              :
                (
                  isOpenForEdit 
                    ?
                      <QuestionnaireEditor/>
                    :
                      ( 
                            <Dashboard />
                      )
                )

          )
        )
      ) 
      : (
          isRegistering 
            ? 
              <Register />
            :
              <Login />
        )
        }
    </>
  );
}

export default App;
