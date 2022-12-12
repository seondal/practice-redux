import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const id = useParams().id;
  const todos = useSelector((state) => state);
  const todo = todos.find((todo) => todo.id === parseInt(id));

  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>Created at : {todo?.id}</h5>
    </>
  );
}

export default Detail;
