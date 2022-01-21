import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, id, deleteToDo }) => {
  const onClickDeleteButton = () => {
    deleteToDo();
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <br />
      <button onClick={onClickDeleteButton}>delete</button>
    </li>
  );
};

// index.js에서 설정한 Provider의 store의 dispatch함수를 Home컴포넌트의 props로 전달해줌
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
