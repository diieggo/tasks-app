import { FigureNotes } from "../assets/figures";
import { IconPlus } from "../assets/icons";

function Note({ useFor, handle }) {
  const noteText = ["You have no tasks listed.", "No results found."];

  // useFor -> 0: No task | 1: No found

  return (
    <section className="mb-[86px] flex h-[calc(100vh-200px)] min-h-96 w-full flex-col items-center justify-center px-6 md:mb-0">
      <FigureNotes />
      <h4 className="my-6 font-medium text-slateblue">{noteText[useFor]}</h4>
      {!useFor && (
        <button
          className="flex items-center gap-2 rounded-xl bg-primary bg-opacity-10 px-4 py-3"
          onClick={handle}
        >
          <IconPlus />
          <p className="text-primary">Create task</p>
        </button>
      )}
    </section>
  );
}

export { Note };
