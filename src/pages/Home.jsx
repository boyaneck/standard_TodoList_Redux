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
  padding: 10px;
`;
const BUTTON = styled.button``;

const TITLE = styled.div`
  color: #0fed1d;
  font-size: 30px;
  font-weight: bold;
  margin: 15px 0;
`;

const INPUT = styled.input`
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
`;

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const list = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const titleChange = (event) => {
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
    dispatch(addTodo(addNewList));
    setTitle("");
    setContent("");
  };
  return (
    <>
      <INPUT_BOX>
        <form>
          <TITLE>오늘할일 </TITLE>
          <label>제목 </label>
          <INPUT
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={titleChange}
          />
          <label>내용</label>
          <INPUT
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
