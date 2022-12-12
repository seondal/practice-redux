import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";

function Home() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <ToDo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;
