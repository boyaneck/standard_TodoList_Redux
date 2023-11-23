import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "../components/TodoList";
import { addTodo } from "../redux/modules/todos";
import shortid from "shortid";
const INPUT_BOX = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10%;
`;
const BUTTON = styled.button``;

const TITLE = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 15px 0;
`;

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const list = useSelector((state) => state.todos);
  console.log("컨텐츠가 들어갔나?", list);
  const dispatch = useDispatch();

  const titleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const contentChange = (event) => {
    setContent(event.target.value);
  };

  const addList = (e) => {
    const addNewList = {
      id: shortid.generate(),
      title,
      content,
      isDone: false,
    };
    e.preventDefault();
    //리듀서에 날리기 + 하지만 왜 안들어갈까요?
    dispatch(addTodo(addNewList));
    setTitle("");
    setContent("");
  };
  return (
    <>
      <INPUT_BOX>
        <form>
          <TITLE>TODO LIST 만들기 </TITLE>
          <label>제목</label>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={titleChange}
          />
          <label>내용</label>
          <input
            type="text"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={contentChange}
          />
          <BUTTON onClick={addList}>추가하기</BUTTON>
        </form>
      </INPUT_BOX>

      <TodoList />
    </>
  );
};

export default Home;
