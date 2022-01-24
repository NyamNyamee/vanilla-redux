import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

/**
// actionCreator
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// reducer(modifier). createReducer 사용 시, 기존처럼 새로운 state를 만들어 return할 수도 있고, state를 직접 mutate할 수 있음
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ id: Date.now(), text: action.payload });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

// actionCreators
export const actionCreators = {
  addToDo,
  deleteToDo,
};

// store
const store = configureStore({ reducer });
 */

// createSlice
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// store
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
