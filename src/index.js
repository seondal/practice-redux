import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countStoreModifier = (state = 0) => {
  return "hello";
};

const countStore = createStore(countStoreModifier);

console.log(countStore.getState());
