import React from "react";
import { useParams } from "react-router";

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  return <div>hi</div>;
};

export default Detail;
