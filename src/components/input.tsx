import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoReducer";

const Input = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  console.log(input);
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
        <div>
          <button
            className="input submitButton"
            type="submit"
            name="input"
            onClick={(e) => {
              e.preventDefault();
              if (input) {
              dispatch(addTask(input));
              }
              setInput("");
            }}
          >
            Создать
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
