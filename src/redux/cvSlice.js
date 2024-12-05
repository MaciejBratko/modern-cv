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

// Save state to localStorage with error handling
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cvData', serializedState);
    return true;
  } catch (err) {
    console.error('Failed to save state to localStorage:', err);
    return false;
  }
};

const cvSlice = createSlice({
  name: 'cv',
  initialState: loadState(),
  reducers: {
    updateSectionTitle: (state, action) => {
      const { section, value } = action.payload;
      state.sectionTitles[section] = value;
      saveState(state);
    },
    updatePersonalInfo: (state, action) => {
      const { field, value, subfield } = action.payload;
      if (subfield) {
        state.personalInfo[field][subfield] = value;
      } else {
        state.personalInfo[field] = value;
      }
      saveState(state);
    },
    updateProfilePicture: (state, action) => {
      state.personalInfo.profilePicture = action.payload;
      if (!saveState(state)) {
        // If saving to localStorage fails, keep the old picture
        state.personalInfo.profilePicture = state.personalInfo.profilePicture;
        throw new Error('Failed to save profile picture. The image might be too large.');
      }
    },
    updateWorkExperience: (state, action) => {
      const { index, field, value } = action.payload;
      state.workExperience[index][field] = value;
      saveState(state);
    },
    updateSkill: (state, action) => {
      const { category, index, value } = action.payload;
      state.skills[category][index] = value;
      saveState(state);
    },
    updateSkillCategory: (state, action) => {
      const { oldCategory, newCategory } = action.payload;
      if (oldCategory !== newCategory) {
        state.skills[newCategory] = state.skills[oldCategory];
        delete state.skills[oldCategory];
        saveState(state);
      }
    },
    updateEducation: (state, action) => {
      const { index, field, value } = action.payload;
      state.education[index][field] = value;
      saveState(state);
    }
  }
});

export const { 
  updateSectionTitle,
  updatePersonalInfo, 
  updateWorkExperience, 
  updateSkill, 
  updateEducation,
  updateProfilePicture,
  updateSkillCategory
} = cvSlice.actions;

export default cvSlice.reducer;
