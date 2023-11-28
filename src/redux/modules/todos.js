// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "가자 판교로",
    content: "정말 몰입할것이다",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "할수있다",
    content: "가즈아",
    isDone: false,
  },
];

//휴먼 에러를 방지하기 위해 action 의 type을 변수화
//반복되는 것들은 모듈화가 중요함

const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const SWITCH_TODO = "todos/SWITCH_TODO";
const CANCEL_TODO = "todos/CANCEL_TODO";
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};
export const cancelTodo = (payload) => {
  return { type: CANCEL_TODO, payload };
};

console.log(initialState);
// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodoList = action.payload;
      return [newTodoList, ...state];

    case DELETE_TODO:
      const id = action.payload;
      return state.filter((todoList) => todoList.id !== id); //TODO: 여기 작성

    case SWITCH_TODO:
      console.log(action.payload);
      return state.filter((state) => state.id === action.payload.id);

    case CANCEL_TODO:
      return;
    default:
      return state;
  }
};

export default todos;
