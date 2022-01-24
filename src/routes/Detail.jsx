import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

const Detail = ({ toDos }) => {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <div>
      <h1>{toDo?.text}</h1>
      Created at {toDo?.id}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

export default connect(mapStateToProps, null)(Detail);
