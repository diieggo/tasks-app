import { useState } from "react";
import { TodoDropdown, TodoModal } from "./index";

function TodoItem({
  id,
  title,
  description,
  completed,
  onComplete,
  onDelete,
  onUpdate,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIsOpenModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log("Open/Close Edit Modal");
  };

  return (
    <>
      <li className="flex gap-4 rounded-xl bg-palewhite p-4 transition-colors dark:bg-gray-800">
        <input
          type="checkbox"
          className="mt-[2px] h-6 w-6 rounded-md border-2 border-mutedazure bg-transparent text-primary transition-colors focus:ring-primary dark:focus:ring-offset-gray-800"
          onChange={() => {
            onComplete();
          }}
          checked={completed}
        />
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <h4
              className={`text-xl font-medium transition-colors ${completed ? "text-slateblue line-through" : "text-secondary dark:text-white"}`}
            >
              {title}
            </h4>
            <TodoDropdown
              onDelete={onDelete}
              openModalAction={handleIsOpenModal}
            />
          </div>
          {description && (
            <p className="mt-2 text-lg font-normal text-slateblue">
              {description}
            </p>
          )}
        </div>
      </li>
      {isModalOpen && (
        <TodoModal
          useFor={1}
          id={id}
          title={title}
          description={description}
          completed={completed}
          handleIsOpenModal={handleIsOpenModal}
          onSubmit={onUpdate}
        />
      )}
    </>
  );
}

export { TodoItem };
