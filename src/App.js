import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Nav } from "./features/Nav";
import { Header } from "./features/Header";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoFilter } from "./components/TodoFilter";
import { TodoModal } from "./components/TodoModal";

const defaultTodos = [
  { id: 1, title: "Task 1", description: "Description", completed: true },
  { id: 2, title: "Task 2", description: "", completed: false },
  { id: 3, title: "Task 3", description: "Description", completed: true },
  { id: 4, title: "Task 4", description: "", completed: false },
  { id: 5, title: "Task 5", description: "Description", completed: true },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filter, setFilter] = useState(selectedFilter)
  
  const pendingTodos = todos.filter((todo) => todo.completed === false);

  const searchedTodo = todos.filter((todo) => {
    const todoTile = todo.title.toLowerCase();
    const todoDescription = todo.description.toLowerCase();
    return (
      todoTile.includes(searchValue.toLowerCase()) ||
      todoDescription.includes(searchValue.toLowerCase())
    );
  });

  const handleFilter = (filter) => {
    setSelectedFilter(filter)
  }

  useEffect(() => {
    setFilter(selectedFilter)
  }, [selectedFilter, searchValue, todos])

  const createTodo = (title, description, completed) => {
    const newTodo = { id: uuidv4(), title: title, description: description, completed: completed }
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo]
    })
  }

  const checkTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
    console.log(`Todo Checked, ID: ${id}`)
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    console.log(`Todo Deleted, ID: ${id}`)
  }

  const updateTodo = ( id, newTitle, newDescription, newCompleted) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newTitle, description: newDescription, completed: newCompleted }
        }
        return todo
      })
    })
    console.log(`Todo Updated, ID: ${id}`)
  }

  const handleIsOpenModal = () => {
    setIsCreateModalOpen(!isCreateModalOpen)
    console.log("Open/Close Create Modal")
  }

  return (
    <>
      <Nav handleIsOpenModal={handleIsOpenModal} />
      <div className="App mx-auto mt-10 max-w-[800px] lg:max-w-[1080px]">
        <Header />
        <section className="w-full px-6 mt-6 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-secondary">
              Welcome, <span className="text-primary">Diego</span>
            </h2>
            <TodoCounter pendingTodosCounter={pendingTodos.length} allTodosCounter={todos.length} />
          </div>
          <div className="flex flex-row-reverse gap-2">
            <TodoFilter handleFilter={handleFilter} currentFilter={selectedFilter} />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
        </section>
        {todos.length > 0 ? (
          <section className="w-full px-6 mt-9 mb-32 md:mb-8">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <button
                className="hidden bg-primary bg-opacity-10 px-4 py-3 gap-2 rounded-xl md:flex"
                onClick={() => setIsCreateModalOpen(true)}
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.37714 1.5H17.6229C19.3416 1.5 20.66 2.09961 21.5538 3.05962C22.4551 4.02771 23 5.44472 23 7.20219V17.7978C23 19.5553 22.4551 20.9723 21.5538 21.9404C20.66 22.9004 19.3416 23.5 17.6229 23.5H6.37714C4.65841 23.5 3.33997 22.9004 2.44619 21.9404C1.54489 20.9723 1 19.5553 1 17.7978V7.20219C1 5.44595 1.54702 4.02877 2.45004 3.06009C3.34579 2.09921 4.66476 1.5 6.37714 1.5Z"
                    stroke="#007FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0001 8.09277V16.8844"
                    stroke="#007FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.3999 12.4886H7.59985"
                    stroke="#007FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-lg text-primary font-medium">
                  Add a new task
                </p>
              </button>
              <p className="text-lg text-primary">Clear completed</p>
            </div>
            <TodoList todoList={searchedTodo} filter={filter} checkTodoAction={checkTodo} deleteTodoAction={deleteTodo} updateTodoAction={updateTodo} />
          </section>
        ) : (
          <section className="w-full h-[calc(100vh-200px)] min-h-96 mb-[86px] px-6 flex flex-col items-center justify-center md:mb-0">
            <svg
              width="148"
              height="144"
              viewBox="0 0 148 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_14_822)">
                <path
                  d="M93.9563 32.3851H54.0767C53.1679 32.3862 52.2967 32.7466 51.6541 33.3871C51.0114 34.0276 50.6499 34.8961 50.6488 35.8019V124.149L50.1918 124.287L40.4087 127.274C39.9451 127.415 39.4443 127.366 39.0163 127.14C38.5882 126.913 38.268 126.526 38.1258 126.064L9.02557 31.3168C8.88396 30.8547 8.93222 30.3554 9.15977 29.9287C9.38731 29.502 9.77551 29.1828 10.239 29.0413L25.3148 24.44L69.0199 11.1054L84.0955 6.50416C84.3249 6.43378 84.566 6.40918 84.805 6.43178C85.044 6.45438 85.2761 6.52374 85.4882 6.63587C85.7002 6.748 85.888 6.90072 86.0408 7.08527C86.1936 7.26983 86.3083 7.4826 86.3785 7.71142L93.8169 31.9296L93.9563 32.3851Z"
                  fill="#F5F7F9"
                />
                <path
                  d="M102.658 31.9293L93.6933 2.74089C93.5442 2.25456 93.3004 1.80229 92.9758 1.40992C92.6512 1.01756 92.2522 0.692788 91.8017 0.454174C91.3511 0.215559 90.8578 0.0677724 90.35 0.0192658C89.8421 -0.0292408 89.3296 0.0224826 88.8418 0.171475L67.6463 6.6383L23.9435 19.9751L2.74797 26.4443C1.76334 26.7456 0.938892 27.4241 0.455597 28.3307C-0.0276977 29.2374 -0.130356 30.2981 0.170159 31.2801L30.8106 131.034C31.0547 131.827 31.5473 132.521 32.2161 133.014C32.8848 133.507 33.6946 133.774 34.5264 133.774C34.9115 133.775 35.2943 133.717 35.6621 133.604L50.1917 129.171L50.6487 129.03V128.554L50.1917 128.693L35.5273 133.169C34.6582 133.433 33.7195 133.342 32.9171 132.917C32.1147 132.493 31.5141 131.768 31.2471 130.902L0.609018 31.1457C0.476723 30.7168 0.430615 30.2661 0.473332 29.8193C0.516049 29.3726 0.646748 28.9387 0.857954 28.5424C1.06916 28.1461 1.35672 27.7952 1.70417 27.5098C2.05162 27.2244 2.45212 27.0102 2.88276 26.8793L24.0783 20.4102L67.7812 7.07565L88.9767 0.60655C89.3033 0.507189 89.6429 0.456528 89.9844 0.45621C90.7173 0.457851 91.4304 0.693371 92.0193 1.12827C92.6082 1.56318 93.0419 2.17461 93.2569 2.87301L102.181 31.9293L102.322 32.3849H102.798L102.658 31.9293Z"
                  fill="#C6CFDC"
                />
                <path
                  d="M28.0357 29.1157C27.5952 29.1154 27.1665 28.9744 26.8123 28.7134C26.4581 28.4524 26.1972 28.0851 26.0678 27.6655L23.1243 18.0822C23.0452 17.8247 23.0178 17.5543 23.0436 17.2863C23.0693 17.0183 23.1478 16.758 23.2745 16.5202C23.4012 16.2825 23.5737 16.0719 23.7821 15.9006C23.9904 15.7293 24.2306 15.6006 24.4889 15.5218L64.6951 3.25241C65.2166 3.09376 65.7801 3.14787 66.2617 3.40285C66.7432 3.65783 67.1037 4.09286 67.2638 4.61244L70.2073 14.1959C70.3664 14.7158 70.312 15.2773 70.0562 15.7574C69.8004 16.2374 69.3641 16.5966 68.8429 16.7564L28.6366 29.0257C28.4419 29.0853 28.2394 29.1156 28.0357 29.1157Z"
                  fill="#007FFF"
                />
                <path
                  d="M43.4547 10.24C45.9789 10.24 48.0252 8.20036 48.0252 5.68431C48.0252 3.16826 45.9789 1.1286 43.4547 1.1286C40.9305 1.1286 38.8843 3.16826 38.8843 5.68431C38.8843 8.20036 40.9305 10.24 43.4547 10.24Z"
                  fill="#007FFF"
                />
                <path
                  d="M43.4547 8.56913C45.0531 8.56913 46.3489 7.27756 46.3489 5.68432C46.3489 4.09108 45.0531 2.7995 43.4547 2.7995C41.8563 2.7995 40.5605 4.09108 40.5605 5.68432C40.5605 7.27756 41.8563 8.56913 43.4547 8.56913Z"
                  fill="white"
                />
                <path
                  d="M137.717 132.611H60.4757C59.9607 132.61 59.4669 132.406 59.1028 132.043C58.7386 131.68 58.5338 131.188 58.5332 130.675V38.4214C58.5338 37.9081 58.7386 37.416 59.1028 37.053C59.4669 36.69 59.9607 36.4858 60.4757 36.4853H137.717C138.232 36.4859 138.725 36.69 139.089 37.053C139.454 37.416 139.658 37.9081 139.659 38.4214V130.675C139.658 131.188 139.454 131.68 139.089 132.043C138.725 132.406 138.232 132.61 137.717 132.611Z"
                  fill="#C6CFDC"
                  fillOpacity="0.5"
                />
                <path
                  d="M102.181 31.9296H54.0768C53.0469 31.931 52.0596 32.3395 51.3314 33.0654C50.6031 33.7912 50.1934 34.7754 50.1919 35.8019V128.693L50.6489 128.554V35.8019C50.65 34.8961 51.0115 34.0276 51.6542 33.3871C52.2968 32.7466 53.168 32.3862 54.0768 32.3851H102.323L102.181 31.9296ZM144.115 31.9296H54.0768C53.0469 31.931 52.0596 32.3395 51.3314 33.0654C50.6031 33.7912 50.1934 34.7754 50.1919 35.8019V140.128C50.1934 141.154 50.6031 142.138 51.3314 142.864C52.0596 143.59 53.0469 143.999 54.0768 144H144.115C145.145 143.999 146.132 143.59 146.86 142.864C147.589 142.138 147.998 141.154 148 140.128V35.8019C147.998 34.7754 147.589 33.7912 146.86 33.0654C146.132 32.3395 145.145 31.931 144.115 31.9296ZM147.543 140.128C147.542 141.034 147.18 141.902 146.538 142.542C145.895 143.183 145.024 143.543 144.115 143.544H54.0768C53.168 143.543 52.2968 143.183 51.6542 142.542C51.0115 141.902 50.65 141.034 50.6489 140.128V35.8019C50.65 34.8961 51.0115 34.0276 51.6542 33.3871C52.2968 32.7466 53.168 32.3862 54.0768 32.3851H144.115C145.024 32.3862 145.895 32.7466 146.538 33.3871C147.18 34.0276 147.542 34.8961 147.543 35.8019V140.128Z"
                  fill="#C6CFDC"
                />
                <path
                  d="M120.12 41.9521H78.0718C77.5266 41.9515 77.0038 41.7353 76.6182 41.351C76.2326 40.9666 76.0158 40.4456 76.0151 39.902V29.8795C76.0158 29.336 76.2326 28.8149 76.6182 28.4305C77.0038 28.0462 77.5266 27.83 78.0718 27.8294H120.12C120.665 27.83 121.188 28.0462 121.574 28.4305C121.959 28.8149 122.176 29.336 122.177 29.8795V39.902C122.176 40.4456 121.959 40.9666 121.574 41.351C121.188 41.7353 120.665 41.9515 120.12 41.9521Z"
                  fill="#007FFF"
                />
                <path
                  d="M99.0959 28.5128C101.62 28.5128 103.666 26.4731 103.666 23.9571C103.666 21.441 101.62 19.4014 99.0959 19.4014C96.5717 19.4014 94.5254 21.441 94.5254 23.9571C94.5254 26.4731 96.5717 28.5128 99.0959 28.5128Z"
                  fill="#007FFF"
                />
                <path
                  d="M99.0959 26.7319C100.633 26.7319 101.88 25.4896 101.88 23.9571C101.88 22.4246 100.633 21.1822 99.0959 21.1822C97.5584 21.1822 96.312 22.4246 96.312 23.9571C96.312 25.4896 97.5584 26.7319 99.0959 26.7319Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_14_822">
                  <rect width="148" height="144" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h4 className="text-slateblue text-lg font-medium my-6">
              You have no tasks listed.
            </h4>
            <button className="flex items-center gap-2 bg-primary bg-opacity-10 px-4 py-3 rounded-xl">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 1V13"
                  stroke="#007FFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 7H1"
                  stroke="#007FFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-primary">Create task</p>
            </button>
          </section>
        )}
      </div>
      {isCreateModalOpen && (
        <TodoModal useFor={0} handleIsOpenModal={handleIsOpenModal} onSubmit={createTodo} />
      )
      }
    </>
  );
}

export { App };
