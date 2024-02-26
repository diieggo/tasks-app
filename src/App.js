import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Nav, Header } from "./Layout";
import {
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoFilter,
  TodoModal,
} from "./components";
import { IconSquarePlus, IconPlus } from "./assets/icons";
import { FigureNotes } from "./assets/figures";

function App() {
  const localStorageTodos = localStorage.getItem("TodosList")
  const parsedTodos = JSON.parse(localStorageTodos)

  const [todos, setTodos] = useState(parsedTodos || []);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filter, setFilter] = useState(selectedFilter);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  const pendingTodos = todos.filter((todo) => !todo.completed);

  useEffect(() => {
    const stringifiedTodos = JSON.stringify(todos)
    localStorage.setItem("TodosList", stringifiedTodos)
    console.log("Local Storage Updated")
  }, [todos])

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
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
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
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const checkTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
    console.log(`Todo Checked, ID: ${id}`);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    console.log(`Todo Deleted, ID: ${id}`);
  };

  const updateTodo = (id, newTitle, newDescription, newCompleted) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
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
    });
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
        <section className="mt-6 flex w-full flex-col gap-6 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-secondary transition-colors dark:text-white">
              Welcome, <span className="text-primary">Diego</span>
            </h2>
            <TodoCounter
              pendingTodosCounter={pendingTodos.length}
              allTodosCounter={todos.length}
            />
          </div>
          <div className="flex flex-row-reverse gap-2">
            <TodoFilter
              handleFilter={handleFilter}
              currentFilter={selectedFilter}
            />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
        </section>
        {todos.length > 0 ? (
          <section className="mb-32 mt-9 w-full px-6 md:mb-8">
            <div className="mb-4 flex items-center justify-between md:mb-6">
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
          <section className="mb-[86px] flex h-[calc(100vh-200px)] min-h-96 w-full flex-col items-center justify-center px-6 md:mb-0">
            <FigureNotes />
            <h4 className="my-6 font-medium text-slateblue">
              You have no tasks listed.
            </h4>
            <button
              className="flex items-center gap-2 rounded-xl bg-primary bg-opacity-10 px-4 py-3"
              onClick={handleIsOpenModal}
            >
              <IconPlus />
              <p className="text-primary">Create task</p>
            </button>
          </section>
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
