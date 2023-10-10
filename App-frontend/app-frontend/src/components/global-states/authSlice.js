import { createSlice } from '@reduxjs/toolkit';
import { LoadForFill } from "../helper-functions/LoadForFill";
import { LoadForAnalyze } from "../helper-functions/LoadForAnalyze";
import { GenerateId } from "../helper-functions/GenerateId";


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
      state.CurrentForAnalyze = LoadForAnalyze(action.payload);

      state.isOpenForFill = false;
      state.CurrentForFill = {};
      
      state.isOpenForEdit = false;
      state.CurrentForEdit = {};
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
    OpenEdit: (state, action) => {
      console.log(action);
      state.currentQuestionnaireId = GenerateId();
      state.isOpenForEdit = true;
      
      state.isOpenForAnalyze = false;
      state.CurrentForAnalyze = {};
      
      state.isOpenForFill = false;
      state.CurrentForFill = {};
    },
    OpenDashboard: (state, action) => {
      console.log(action);
      state.currentQuestionnaireId = null;
      state.isOpenForEdit = false;
      
      state.isOpenForAnalyze = false;
      state.CurrentForAnalyze = {};
      
      state.isOpenForFill = false;
      state.CurrentForFill = {};
    },

  },
});

export const { login, logout, OpenAnalyzer, OpenEdit, OpenFill, OpenDashboard } = authSlice.actions;
export default authSlice.reducer;
