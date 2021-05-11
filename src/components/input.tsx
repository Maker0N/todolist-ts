import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoReducer";

const Input = (props: any) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const todoTime = (): string => {
    const zero = (arg: number): string => {
      return arg.toString().length === 1 ? `0${arg}` : `${arg}`;
    };
    const date = new Date();
    return `${zero(date.getDate())}.${zero(
      date.getMonth()
    )}.${date.getFullYear()} ${zero(date.getHours())}:${zero(
      date.getMinutes()
    )}`;
  };

  const pageSize = Math.floor(
    (document.body.getBoundingClientRect().height) / 61
  );

  return (
    <div className="center">
      <form name="input">
        <div>
          <input
            className="input"
            name="input"
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="center">
          <button
            className={input ? "input submitButton" : "input button"}
            type="submit"
            name="input"
            onClick={(e) => {
              e.preventDefault();
              if (input) {
                dispatch(addTask(input, todoTime(), pageSize, props.currentPage));
              }
              setInput("");
            }}
          >
            {input ? "Создать" : ""}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
