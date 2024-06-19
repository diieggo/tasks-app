import { useContext, useEffect } from "react";
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
import { TodoContext } from "./context/TodoContext";

function App() {
  const {
    todos,
    todosIsLoading,
    todosError,
    isCreateModalOpen,
    setIsCreateModalOpen,
    handleIsOpenModal,
  } = useContext(TodoContext);

  const { storedValue: theme, setValue: setTheme } = useLocalStorage(
    "theme",
    "dark",
  );

  useEffect(() => {
    const htmlElementClassList = document.querySelector("html").classList;
    theme === "light"
      ? htmlElementClassList.remove("dark")
      : htmlElementClassList.add("dark");
  }, [theme]);

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", handleChangeTheme);

  return (
    <>
      <Nav handleChangeTheme={handleChangeTheme} />
      <div className="App mx-auto mt-10 max-w-[800px] lg:max-w-[1080px]">
        <Header handleChangeTheme={handleChangeTheme} />
        <section className="mt-6 flex w-full flex-col gap-6 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-secondary transition-colors dark:text-white">
              Welcome, <span className="text-primary">Diego</span>
            </h2>
            {todosIsLoading && (
              <p className="mt-1 text-lg text-slateblue">Loading...</p>
            )}
            {!todosIsLoading && <TodoCounter />}
          </div>
          <div className="flex flex-row-reverse gap-2">
            <TodoFilter />
            <TodoSearch />
          </div>
        </section>
        {todosIsLoading && (
          <p className="mx-6 mt-6 text-center text-white">Loading...</p>
        )}
        {todosError && <p>Error</p>}
        {!todosIsLoading && todos.length > 0 && (
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
            <TodoList />
          </section>
        )}
        {!todosIsLoading && todos.length === 0 && <Note useFor={0} />}
      </div>
      {isCreateModalOpen && (
        <TodoModal useFor={0} handleIsOpenModal={handleIsOpenModal} />
      )}
    </>
  );
}

export { App };
