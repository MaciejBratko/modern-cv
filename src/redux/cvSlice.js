import { createSlice } from '@reduxjs/toolkit';
import cvData from '../data/cvData';

// Get data from localStorage or use default cvData
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cvData');
    if (serializedState === null) {
      return cvData;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return cvData;
  }
};

const cvSlice = createSlice({
  name: 'cv',
  initialState: loadState(),
  reducers: {
    updatePersonalInfo: (state, action) => {
      const { field, value, subfield } = action.payload;
      if (subfield) {
        state.personalInfo[field][subfield] = value;
      } else {
        state.personalInfo[field] = value;
      }
      localStorage.setItem('cvData', JSON.stringify(state));
    },
    updateWorkExperience: (state, action) => {
      const { index, field, value } = action.payload;
      state.workExperience[index][field] = value;
      localStorage.setItem('cvData', JSON.stringify(state));
    },
    updateSkill: (state, action) => {
      const { category, index, value } = action.payload;
      state.skills[category][index] = value;
      localStorage.setItem('cvData', JSON.stringify(state));
    },
    updateEducation: (state, action) => {
      const { index, field, value } = action.payload;
      state.education[index][field] = value;
      localStorage.setItem('cvData', JSON.stringify(state));
    }
  }
});

export const { 
  updatePersonalInfo, 
  updateWorkExperience, 
  updateSkill, 
  updateEducation 
} = cvSlice.actions;

export default cvSlice.reducer;
