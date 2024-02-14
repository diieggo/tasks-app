import { TodoDropdown } from "./TodoDropdown";

function TodoItem({
  title,
  description,
  completed,
  onComplete,
  onDelete,
}) {
  return (
    <li className="flex p-4 gap-4 bg-palewhite rounded-xl">
      <input
        type="checkbox"
        className="w-6 h-6 mt-[2px] bg-palewhite text-primary border-mutedazure border-2 rounded-md focus:ring-primary"
        onClick={() => {
          console.log(onComplete);
          onComplete();
        }}
        defaultChecked={completed}
      />
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h4
            className={`text-secondary text-xl font-medium ${completed && "line-through text-slateblue"}`}
          >
            {title}
          </h4>
          <TodoDropdown onDelete={onDelete} />
        </div>
        {description ? (
          <p className="text-slateblue text-lg font-normal mt-2">
            {description}
          </p>
        ) : (
          ""
        )}
      </div>
    </li>
  );
}

export { TodoItem };
