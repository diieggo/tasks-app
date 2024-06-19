import { useContext, useState } from "react";
import { IconClose } from "../assets/icons";
import { TodoContext } from "../context/TodoContext";

function TodoModal({
  useFor,
  id,
  title,
  description,
  completed,
  handleIsOpenModal,
}) {
  const { createTodo } = useContext(TodoContext);
  const [modalTitle, setModalTitle] = useState(title || "");
  const [modalDescription, setModalDescription] = useState(description || "");
  const [modalCompleted, setModalCompleted] = useState(completed || "");

  const handleUpdateTodo = () => {
    if (useFor) {
      createTodo(id, modalTitle, modalDescription, modalCompleted);
    } else {
      createTodo(modalTitle, modalDescription, modalCompleted);
    }
  };

  const modalText = [
    { headerText: "Create task", buttonText: "Create" },
    { headerText: "Update task", buttonText: "Update" },
  ];

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-30 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50`}
    >
      <div className="relative max-h-full w-full max-w-md p-4">
        <div className="relative rounded-xl bg-white shadow transition-colors dark:bg-gray-800">
          <div className="flex items-center justify-between border-b border-mutedazure p-4 transition-colors dark:border-gray-700">
            <h3 className="text-xl font-semibold text-secondary transition-colors dark:text-white">
              {modalText[useFor].headerText}
            </h3>
            <button
              className="ms-auto inline-flex h-8 w-8 items-center justify-center text-slateblue hover:text-primary"
              onClick={handleIsOpenModal}
            >
              <IconClose />
            </button>
          </div>
          <div className="p-4">
            <form
              className="space-y-6"
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateTodo();
                handleIsOpenModal(false);
              }}
            >
              <div>
                <label className="mb-2 block text-secondary transition-colors dark:text-slateblue">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="off"
                  autoFocus={true}
                  defaultValue={modalTitle}
                  onChange={(e) => setModalTitle(e.target.value)}
                  className="block w-full rounded-lg border border-mutedazure p-2 text-lg text-secondary transition-colors focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 dark:border-slateblue dark:bg-gray-700 dark:text-white dark:focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-secondary transition-colors dark:text-slateblue">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="off"
                  defaultValue={modalDescription}
                  onChange={(e) => setModalDescription(e.target.value)}
                  className="block w-full rounded-lg border border-mutedazure p-2 text-lg text-secondary focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 dark:border-slateblue dark:bg-gray-700 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="completed"
                  id="completed"
                  defaultChecked={modalCompleted}
                  onClick={() => setModalCompleted(!modalCompleted)}
                  className="mt-[2px] h-5 w-5 rounded-md border-2 border-mutedazure bg-transparent text-primary transition-colors focus:ring-primary dark:focus:ring-offset-gray-800"
                />
                <label
                  className="text-secondary transition-colors dark:text-slateblue"
                  htmlFor="completed"
                >
                  Completed
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-2 text-center font-medium text-white transition-all ease-out hover:bg-blue-600 focus:ring-2"
              >
                {modalText[useFor].buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TodoModal };
