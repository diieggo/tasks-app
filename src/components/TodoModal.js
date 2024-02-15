import { useState } from "react";

function TodoModal({ useFor, id, title, description, completed, handleIsOpenModal, onSubmit }) {
  const [modalTitle, setModalTitle] = useState(title || "")
  const [modalDescription, setModalDescription] = useState(description || "")
  const [modalCompleted, setModalCompleted] = useState(completed || "")

  const handleUpdateTodo = () => {
    if (useFor) {
      onSubmit(id, modalTitle, modalDescription, modalCompleted)
    } else {
      onSubmit(modalTitle, modalDescription, modalCompleted)
    }
  }

  const modalText = [
    { headerText: "Create task", buttonText: "Create" },
    { headerText: "Update task", buttonText: "Update" },
  ]

  return (
    <div
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30 flex justify-center items-center w-full h-full bg-gray-600 bg-opacity-50`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-xl shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b border-mutedazure">
            <h3 className="text-xl font-semibold text-secondary">
              { modalText[useFor].headerText }
            </h3>
            <button
              className="text-slateblue hover:text-primary w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={handleIsOpenModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <form className="space-y-6" action="#" onSubmit={(e) => {
                  e.preventDefault()
                  handleUpdateTodo()
                  handleIsOpenModal(false)
                  }}>
              <div>
                <label
                  className="block mb-2 text-secondary"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="off"
                  defaultValue={modalTitle}
                  onChange={(e) => setModalTitle(e.target.value)}
                  className="border border-mutedazure text-secondary text-lg rounded-lg focus:ring-2 focus:ring-primary focus:ring-opacity-20 focus:border-primary block w-full p-2"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-secondary"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="off"
                  defaultValue={modalDescription}
                  onChange={(e) => setModalDescription(e.target.value)}
                  className="border border-mutedazure text-secondary text-lg rounded-lg focus:ring-2 focus:ring-primary focus:ring-opacity-20 focus:border-primary block w-full p-2"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="completed"
                  id="completed"
                  defaultChecked={modalCompleted}
                  onClick={() => setModalCompleted(!modalCompleted)}
                  className="w-5 h-5 mt-[2px] bg-transparent text-primary border-mutedazure border-2 rounded-md focus:ring-primary"
                />
                <label className="text-secondary" htmlFor="completed">Completed</label>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-blue-600 transition-all ease-out focus:ring-2 font-medium rounded-lg px-4 py-2 text-center"
              >
                { modalText[useFor].buttonText }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TodoModal };
