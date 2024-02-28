import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Nav, Header } from "./Layout";
import {
  Note,
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoFilter,
  TodoModal,
} from "./components";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { IconSquarePlus } from "./assets/icons";

function App() {
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
  const { storedValue: theme, setValue: setTheme } = useLocalStorage(
    "theme",
    "dark",
  );

  const pendingTodos = todos.filter((todo) => !todo.completed);

  useEffect(() => {
    setFilter(selectedFilter);
  }, [selectedFilter, searchValue, todos]);

  useEffect(() => {
    const htmlElementClassList = document.querySelector("html").classList;
    theme === "light"
      ? htmlElementClassList.remove("dark")
      : htmlElementClassList.add("dark");
  }, [theme]);

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

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", handleChangeTheme);

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
    <>
      <Nav
        handleIsOpenModal={handleIsOpenModal}
        handleChangeTheme={handleChangeTheme}
      />
      <div className="App mx-auto mt-10 max-w-[800px] lg:max-w-[1080px]">
        <Header handleChangeTheme={handleChangeTheme} />
        <section className="mt-6 w-full flex-col px-6">
          <div>
            <h2 className="text-2xl font-semibold text-secondary transition-colors dark:text-white">
              Welcome, <span className="text-primary">Diego</span>
            </h2>
            <TodoCounter
              pendingTodosCounter={pendingTodos.length}
              allTodosCounter={todos.length}
            />
          </div>
        </section>
        {todos.length > 0 ? (
          <section className="mb-32 mt-6 flex w-full flex-col gap-6 px-6 md:mb-8">
            <div className="flex flex-row-reverse gap-2 mb-3">
              <TodoFilter
                handleFilter={handleFilter}
                currentFilter={selectedFilter}
              />
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="hidden gap-2 rounded-xl bg-primary bg-opacity-10 px-4 py-3 md:flex"
                onClick={() => setIsCreateModalOpen(true)}
              >
                <IconSquarePlus stroke="#007FFF" />
                <p className="font-medium text-primary">Add a new task</p>
              </button>
              <p className="text-primary">Clear completed</p>
            </div>
            <TodoList
              todoList={searchedTodo}
              filter={filter}
              checkTodoAction={checkTodo}
              deleteTodoAction={deleteTodo}
              updateTodoAction={updateTodo}
            />
          </section>
        ) : (
          <Note useFor={0} handle={handleIsOpenModal} />
        )}
      </div>
      {isCreateModalOpen && (
        <TodoModal
          useFor={0}
          handleIsOpenModal={handleIsOpenModal}
          onSubmit={createTodo}
        />
      )}
    </>
  );
}

export { App };
