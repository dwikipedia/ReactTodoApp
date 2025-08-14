import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "./thunks/thunks";

export default function NewTodoForm({ onCreateClicked }) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(createTodo(inputText));
          setInputText("");
        }}
      >
        + Add
      </button>
    </div>
  );
}
