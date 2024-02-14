import { TodoItem } from "./TodoItem"

function TodoList({ todoList }) {
    return (
        <ul className="flex flex-col gap-4">
            {
                todoList.map((todo, index) => (
                    <TodoItem key={index} title={todo.title} description={todo.description} completed={todo.completed} />
                ))
            }
        </ul>
    );
}

export { TodoList }