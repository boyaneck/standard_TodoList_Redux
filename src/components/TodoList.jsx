import React from "react";
import { useSelector } from "react-redux";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
const TodoList = () => {
  const Lists = useSelector((state) => state.todos);
  const navigate = useNavigate();
  //  const nvaigation=()
  return (
    <div>
      {Lists.map((list) => {
        if (!list.isDone) {
          return (
            <div
              key={shortid()}
              onClick={() => {
                // naviaga
              }}
            >
              <div>{list.title}</div>
              <div>{list.content}</div>
            </div>
          );
        } else {
          return (
            <div key={shortid()}>
              <div>{list.title}</div>
              <div>{list.content}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TodoList;
