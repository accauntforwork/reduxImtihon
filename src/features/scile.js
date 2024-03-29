import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let id = Math.random().toString(36).substring(2, 15);
      state.push({
        id: id,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodoComplete: (state, action) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload);
      state[todoIndex].completed = !state[todoIndex].completed;
    },
    removeTodo: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload) {
          state.splice(i, 1);
        }
      }
    },
  },
});

export const { addTodo, toggleTodoComplete, removeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
