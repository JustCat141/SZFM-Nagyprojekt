import { createSlice } from '@reduxjs/toolkit';
import { LoadForFill } from "../helper-functions/LoadForFill";


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
    OpenFill: (state, action) => {
      console.log(action);
      state.currentQuestionnaireId = action.payload;
      state.isOpenForFill = true;
      state.CurrentForFill = LoadForFill(action.payload);

      state.isOpenForAnalyze = false;
      state.CurrentForAnalyze = {};
      
      state.isOpenForEdit = false;
      state.CurrentForEdit = {};
    },
    
  },
});

export const { login, logout, OpenAnalyzer } = authSlice.actions;
export default authSlice.reducer;
