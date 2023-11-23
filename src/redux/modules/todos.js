// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "i can make it happen!",
    content:
      "i 've been through a lot , but eventaully i'm gonna get over it and turn around from the somewhere i 've been ",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "i'm gonna go to pangyo!",
    content:
      "as looking over the where i'm now, probably odds of success is lower than others, but, if you do the best? it'll be became like you've dreamed",
    isDone: false,
  },
];

//Action Creator 설정
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const SWITCH_TODO = "todos/SWITCH_TODO";

//액션 타입은 리듀서에 담겨서 스토어에 리턴해 준다
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodoList = action.payload;
      console.log("추가 리듀서에서 보여주세요", newTodoList);
      return [newTodoList, ...state];

    case "DELETE_TODO":
      const id = action.id;
      return state.filter((todoList) => todoList.id !== id); //TODO: 여기 작성

    case "SWITCH_TODO":
      const {} = action.payload;
    // return state.map(todoList=>);

    default:
      return state;
  }
};

export default todos;
