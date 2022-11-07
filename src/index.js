import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countStoreModifier = (count = 0, action) => {
  if (action.type === "PLUS") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countStoreModifier);
const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

const handlePlus = () => {
  countStore.dispatch({ type: "PLUS" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);

console.log(countStore.getState());
