import { useContext, useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import { Note } from "./";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const {
    searchedTodo: todoList,
    filter,
    checkTodo,
    deleteTodo,
    updateTodo,
  } = useContext(TodoContext);
  const [todosToRender, setTodosToRender] = useState(todoList);

  useEffect(() => {
    if (filter === "Pending") {
      const pendingTodos = todoList.filter((todo) => !todo.completed);
      setTodosToRender(pendingTodos);
    } else if (filter === "Completed") {
      const completedTodos = todoList.filter((todo) => todo.completed);
      setTodosToRender(completedTodos);
    } else {
      setTodosToRender(todoList);
    }
  }, [filter, todoList]);
  return (
    <>
      {todosToRender.length === 0 && <Note useFor={1} />}
      <ul className="flex flex-col gap-4">
        {todosToRender.map((todo, index) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            index={index}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            onComplete={() => checkTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onUpdate={updateTodo}
          />
        ))}
      </ul>
    </>
  );
}

export { TodoList };
