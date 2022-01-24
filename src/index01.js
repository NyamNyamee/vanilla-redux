import { createStore } from "redux";

// DOM
const addBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");
const numberSpan = document.querySelector("span");

// Actions
const COUNT_ADD = "COUNT_ADD";
const COUNT_MINUS = "COUNT_ADD";

// reducer : 두번쨰 파라미터로 받은 액션에 따라 데이터(state)를 변경하고 리턴
const countModifier = (count = 0, action) => {
  console.log("최초 count = " + count);
  console.log(action);
  switch (action.type) {
    case COUNT_ADD:
      count += 1;
      break;
    case COUNT_MINUS:
      count -= 1;
      break;
    default:
      break;
  }
  console.log("변경된 count = " + count);
  return count;
};

// store : 파마리터로 투입한 리듀서가 리턴한 데이터를 저장해 놓은 저장소. 이후 store의 dispatch함수에 액션객체를 담아 리듀서를를 호출하면 리듀서가 그 액션에 따라 데이터를 변경하고 다시 스토어에 리턴함
const store = createStore(countModifier);

// subscibe함수의 파라미터로 들어가는 함수
const onChange = () => {
  console.log("changed count = " + store.getState());
  numberSpan.innerText = store.getState();
};

// store의 subscribe함수는, 스토어에 저장된 데이터(state)의 변화를 감지하고 파라미터로 받은 콜백함수를 실행시킴
store.subscribe(onChange);

const handleAdd = () => {
  // dispatch함수: 스토어에 등록된 reducer에게 ADD 라는 타입의 액션을 실행시키고 상태를 변화시켜 다시 리턴해달라는 신호
  store.dispatch({ type: COUNT_ADD });
};

const handleMinus = () => {
  // dispatch함수: 스토어에 등록된 reducer에게 MINUS 라는 타입의 액션을 실행시키고 상태를 변화시켜 다시 리턴해달라는 신호
  store.dispatch({ type: COUNT_MINUS });
};

// DOM에 이벤트 등록
addBtn.addEventListener("click", handleAdd);
minusBtn.addEventListener("click", handleMinus);

// console.log(store);

// let count = 0;

// const updateNumber = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count = count + 1;
//   updateNumber();
// };

// const handleMinus = () => {
//   count = count - 1;
//   updateNumber();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
