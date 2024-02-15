import { useState } from "react";
import { TodoDropdown } from "./TodoDropdown";
import { TodoModal } from "./TodoModal";

function TodoItem({
  id,
  title,
  description,
  completed,
  onComplete,
  onDelete,
  onUpdate
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIsOpenModal = () => {
    setIsModalOpen(!isModalOpen)
    console.log("Open/Close Edit Modal")
  }

  return (
    <>
      <li className="flex gap-4 rounded-xl bg-palewhite p-4">
        <input
          type="checkbox"
          className="mt-[2px] h-6 w-6 rounded-md border-2 border-mutedazure bg-palewhite text-primary focus:ring-primary"
          onChange={() => {
            onComplete();
          }}
          checked={completed}
        />
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <h4
              className={`text-xl font-medium text-secondary ${completed && "text-slateblue line-through"}`}
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
