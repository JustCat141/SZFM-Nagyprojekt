import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/global-states/authSlice';
import Login from './components/login-page/Login'; // Import your Login component

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      {store.getState().auth.isLoggedIn ? (
        <p>You are already logged in!</p>
      ) : (
        <Login />
      )}
    </Provider>
  );
}

export default App;
