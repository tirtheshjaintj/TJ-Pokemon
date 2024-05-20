import { createSlice } from "@reduxjs/toolkit";
import courses from "../data";

const initialState = {
  courses,
  addedCourses: [],
  completedCourses: []
};

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.addedCourses.push(action.payload);
    },
    completeCourse: (state, action) => {
      state.completedCourses.push(action.payload);
      // Remove the course from addedCourses
      state.addedCourses = state.addedCourses.filter(course => course.id !== action.payload.id);
    }
  }
});

export const { addCourse, completeCourse } = courseSlice.actions;
export default courseSlice.reducer;
