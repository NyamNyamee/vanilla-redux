import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "./ToDo";

const Home = ({ toDos, addToDo, deleteToDo }) => {
  const [text, setText] = useState("");
  const textInput = useRef();

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setText("");
    addToDo(text);
    textInput.current.focus();
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={textInput}
          type="text"
          value={text}
          onChange={onChangeText}
        />
        <button type="submit">Add</button>
      </form>
      <ol>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ol>
    </>
  );
};

// export default Home;

// index.js에서 설정한 Provider의 store의 state를 Home컴포넌트의 props로 전달해줌
const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};
// index.js에서 설정한 Provider의 store의 dispatch함수를 Home컴포넌트의 props로 전달해줌
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
