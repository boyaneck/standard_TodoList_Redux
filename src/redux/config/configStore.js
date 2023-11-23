import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

//컴바인 리듀서에서 스토어로 보낼 모듈을 보낸다 =todos.js 밖에 없기때문에 todos만!
const rootReducer = combineReducers({ todos });

const store = createStore(rootReducer);

//생성한 스토어안에,리듀서를 넣고, 하위 컴포넌트에서 접근 할 수 있도록, 렌더링 시 최상위 컴포넌트에 위치하여 뿌려준다 -> index.js의 최상위 컴포넌트에 위치
export default store;
