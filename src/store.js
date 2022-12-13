import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("Delete");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

// store.subscribe();

export default store;
