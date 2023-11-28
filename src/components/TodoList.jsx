import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Dispatch } from "react";
import { deleteTodo } from "../redux/modules/todos";
import { switchTodo } from "../redux/modules/todos";
const TODOLIST_BOX = styled.div`
  border: 1px solid black;
`;

const TodoList = () => {
  const Lists = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigation = (thisID, content, title) => {
    const data = { thisID, content, title };
    navigate("/detail/" + thisID, { state: data });
  };
  const Done = (id, state) => {
    console.log("dddd", id, state);
    dispatch(switchTodo({ id, state }));
  };

  const Delete = (id) => {
    dispatch(deleteTodo(id));
  };

  const Cancel = () => {
    switchTodo(false);
  };
  return (
    <TODOLIST_BOX>
      {Lists.map((list) => {
        //완료 상태가 아닐경우
        if (list.isDone === false) {
          return (
            <div key={shortid()}>
              <div
                onClick={() => {
                  navigation(list.id, list.title, list.content);
                }}
              >
                <div>{list.title}</div>
                <div>{list.content}</div>
              </div>
              <button onClick={() => Done(list.id, true)}>완료</button>
              <button onClick={() => Delete(list.id)}>삭제</button>
              여기인데
            </div>
          );
          //완료상태일 경우
        } else {
          return (
            <div key={shortid()}>
              <div>{list.title}</div>
              <div>{list.content}</div>
              <button onClick={Cancel}>취소</button>
              <button onClick={Delete}>삭제</button>
            </div>
          );
        }
      })}
    </TODOLIST_BOX>
  );
};

export default TodoList;
