import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";

function TodoList({ todoList, filter, checkTodoAction, deleteTodoAction, updateTodoAction }) {
  const [todosToRender, setTodosToRender] = useState(todoList)

  useEffect(() => {
    if (filter === "Pending") {
      const pendingTodos = todoList.filter((todo) => !todo.completed);
      setTodosToRender(pendingTodos)
    } else if (filter === "Completed") {
      const completedTodos = todoList.filter((todo) => todo.completed);
      setTodosToRender(completedTodos)
    } else {
      setTodosToRender(todoList)
    }
  }, [filter, todoList])
  return (
    <>
      <ul className="flex flex-col gap-4">
        {todosToRender.map((todo, index) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            index={index}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            onComplete={() => checkTodoAction(todo.id)}
            onDelete={() => deleteTodoAction(todo.id)}
            onUpdate={updateTodoAction}
          />
        ))}
      </ul>
    </>
  );
}

export { TodoList };
