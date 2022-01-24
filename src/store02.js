import { createStore } from "redux";

// action
const ADD = "ADD";
const DELETE = "DELETE";

// actionCreator
const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

// actionCreators
export const actionCreators = {
  addToDo,
  deleteToDo,
};

// reducer(modifier)
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now() }];

    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);

    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// store.subscribe();

export default store;
