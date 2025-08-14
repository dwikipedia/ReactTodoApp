import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  getCompletedTodos,
  getIncompletedTodos,
  getTodos,
  getTodosLoading,
} from "./selectors/selectors";

export default function TodoList() {
  const todosAreLoading = useSelector(getTodosLoading);
  const completedTodos = useSelector(getCompletedTodos);
  const incompleteTodos = useSelector(getIncompletedTodos);

  return (
    <div>
      <h1>My Todo List</h1>
      <NewTodoForm />

      <hr />
      {todosAreLoading ? (
        <p>Fetching todos...</p>
      ) : (
        <>
          <h3>Completed:</h3>
          {completedTodos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
          <hr />

          <h3>Incomplete:</h3>
          {incompleteTodos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
}
