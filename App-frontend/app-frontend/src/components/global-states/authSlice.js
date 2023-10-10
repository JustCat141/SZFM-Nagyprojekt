import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    UserQuestionnairesList: [],
    isOpenForEdit: false,
    CurrentForEdit: {},
    isOpenForFill: false,
    CurrentForFill: {},
    isOpenForAnalyze: false, // Add isOpenForAnalyze to the initial state
    CurrentForAnalyze: {},
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.UserQuestionnairesList = action.payload.questionnaireList;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    OpenAnalyzer: (state, action) => {
      console.log(action);
      state.currentQuestionnaireId = action.payload;
      state.isOpenForAnalyze = true;
    },
    
  },
});

export const { login, logout, OpenAnalyzer } = authSlice.actions;
export default authSlice.reducer;
