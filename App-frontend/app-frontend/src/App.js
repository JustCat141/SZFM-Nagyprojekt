import React from 'react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/global-states/authSlice';
import Login from './components/login-page/Login'; // Import your Login component
import Dashboard from './components/dashboard/Dashboard';
import QuestionnaireAnalyzer from './components/questionnaireAnalyzer/QuestionnaireAnalyzer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

function App() {
  console.log(store.getState().auth.isOpenForAnalyze);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isOpenForAnalyze = useSelector((state) => state.auth.isOpenForAnalyze);
  const isOpenForFill = useSelector((state) => state.auth.isOpenForFill);
  const isOpenForEdit = useSelector((state) => state.auth.isOpenForEdit);

  
  return (<>
      {isLoggedIn ? (
        (
          isOpenForAnalyze === true 
        ? 
        <QuestionnaireAnalyzer />
        : (
            isOpenForFill 
              ?
                <QuestionnaireFill />
              :
                <Dashboard />
          )
        )
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
