import { useState, useEffect, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    storedValue: todos,
    setValue: setTodos,
    isLoading: todosIsLoading,
    error: todosError,
  } = useLocalStorage("tasks", []);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("filter", "All");
  const [filter, setFilter] = useState(selectedFilter);

  const pendingTodos = todos.filter((todo) => !todo.completed);

  useEffect(() => {
    setFilter(selectedFilter);
  }, [selectedFilter, searchValue, todos]);

  const searchedTodo = todos.filter((todo) => {
    const todoTile = todo.title.toLowerCase();
    const todoDescription = todo.description.toLowerCase();
    return (
      todoTile.includes(searchValue.toLowerCase()) ||
      todoDescription.includes(searchValue.toLowerCase())
    );
  });

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const handleIsOpenModal = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
    console.log("Open/Close Create Modal");
  };

  const createTodo = (title, description, completed) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: !!completed,
    };
    setTodos([...todos, newTodo]);
  };

  const checkTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(`Todo Checked, ID: ${id}`);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    console.log(`Todo Deleted, ID: ${id}`);
  };

  const updateTodo = (id, newTitle, newDescription, newCompleted) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle,
          description: newDescription,
          completed: !!newCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(`Todo Updated, ID: ${id}`);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        todosIsLoading,
        todosError,
        pendingTodos,
        isCreateModalOpen,
        setIsCreateModalOpen,
        searchedTodo,
        searchValue,
        setSearchValue,
        selectedFilter,
        setSelectedFilter,
        filter,
        handleFilter,
        handleIsOpenModal,
        createTodo,
        checkTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
