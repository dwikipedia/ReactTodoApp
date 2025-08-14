import { useDispatch } from "react-redux";
import { markTodoAsCompleted } from "./todosSlice";
import { deleteTodo } from "./thunks/thunks";
import styled from "styled-components";

const getBackgroundColor = ({ important }) => {
  if (important) {
    return "background-color: #bf0000;";
  } else {
    return "background-color: none;";
  }
};

const CardContainer = styled.div`
  ${getBackgroundColor}
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(235, 235, 235, 1);
  padding: 16px;
  margin-bottom: 2em;
`;

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <CardContainer important={todo.text.endsWith("?")}>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted ? (
        // <button onClick={() => dispatch(deleteTodo(todo.text))}>Delete Item</button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete Item
        </button>
      ) : (
        <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>
          Mark as Completed
        </button>
      )}
    </CardContainer>
  );
}
