import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoCounter() {
  const { todos, pendingTodos } = useContext(TodoContext);

  let allTodosCounter = todos.length
  let pendingTodosCounter = pendingTodos.length

  return (
    <p className="mt-1 text-lg text-slateblue">
      {allTodosCounter > 0
        ? pendingTodosCounter > 0
          ? `You've got ${pendingTodosCounter} tasks to do.`
          : "Congratulations, you completed all your tasks 🎉."
        : "Create tasks to achieve more."}
    </p>
  );
}

export { TodoCounter };
