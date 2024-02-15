import { TodoItem } from "./TodoItem";

function TodoList({ todoList, checkTodoAction, deleteTodoAction }) {
  return (
    <ul className="flex flex-col gap-4">
      {todoList.map((todo, index) => (
        <TodoItem
          key={todo.title}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
          onComplete={() => checkTodoAction(index)}
          onDelete={() => deleteTodoAction(index)}
        />
      ))}
    </ul>
  );
}

export { TodoList };
