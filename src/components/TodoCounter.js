function TodoCounter({ allTodosCounter, pendingTodosCounter }) {
  return (
    <p className="mt-1 text-lg text-slateblue">
      {allTodosCounter > 0
        ? pendingTodosCounter > 0
          ? `You've got ${pendingTodosCounter} tasks to do.`
          : "Congratulations, you completed all your tasks 🎉."
        : "Create tasks to achieve more."}
    </p>
  );
}

export { TodoCounter };
