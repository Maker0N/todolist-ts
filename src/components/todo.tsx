import React from 'react'
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from '../redux/todoReducer'
import '../sass/components/todo.scss'

const Todo = (props: any) => {
  const dispatch = useDispatch();
  const pageSize = Math.floor(
    (document.body.getBoundingClientRect().height) / 61
  );

  return (
    <article
      className={
        props.itTask.isDone ? "doneTodo transition" : "todo transition"
      }
    >
      <div className="time">{props.itTask.time}</div>
      <div className="text">{props.itTask.task}</div>
      <div className="buttons">
        <div>
          <button
            className="buttonX transition"
            onClick={(e) => {
              e.preventDefault();
              dispatch(doneTask(props.itTask.id));
            }}
          >
            V
          </button>
        </div>
        <div>
          <button
            className="buttonX transition"
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteTask(props.itTask.id, pageSize, props.currentPage));
            }}
          >
            X
          </button>
        </div>
      </div>
    </article>
  );
};

export default Todo