import { createStore } from "redux";

// DOM
const form = document.querySelector("form");
const input = document.querySelector("input");
const ol = document.querySelector("ol");

// action types
const CREATE_TODO = "CREATE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// actionCreators
const createTodo = (text) => {
  return { type: CREATE_TODO, text, id: Date.now() };
};

const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

// dispatchers
const dispatchCreateTodo = (text) => {
  store.dispatch(createTodo(text));
};

const dispatchDeleteTodo = (e) => {
  const id = e.target.parentNode.id;
  // console.info(id, typeof id);
  store.dispatch(deleteTodo(id));
};

// reducer
const reducer = (prevState = [], action) => {
  // console.log(state, action);
  let newState;
  
  switch (action.type) {
    case CREATE_TODO:
      const newToDo = { text: action.text, id: action.id };
      newState = [...prevState, newToDo];
      break;
    case UPDATE_TODO:
      newState = [];
      break;
    case DELETE_TODO:
      newState = prevState.filter((v) => v.id !== parseInt(action.id));
      break;
    default:
      return prevState;
  }

  return newState;
};

// store
const store = createStore(reducer);

// subscribe's callback function
const onChangeState = () => {
  console.log("state has been changed!");
  const toDos = store.getState();
  ol.innerHTML = "";
  toDos.forEach((toDo, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "delete";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ol.appendChild(li);
  });
};

store.subscribe(onChangeState);

// function
const onSubmitForm = (e) => {
  const toDo = input.value;
  if (toDo.trim() === "") {
    return;
  }
  e.preventDefault();
  dispatchCreateTodo(toDo);
  input.value = "";
};

form.addEventListener("submit", onSubmitForm);
