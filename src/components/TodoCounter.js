function TodoCounter({ allTodosCounter, pendingTodosCounter }) {
  return (
    <p className="text-slateblue text-lg mt-1">
      {allTodosCounter > 0
        ? pendingTodosCounter > 0
          ? `You've got ${pendingTodosCounter} tasks to do.`
          : "Congratulations, you completed all your tasks 🎉."
        : "Create tasks to achieve more."
      }
    </p>
  );
}

export { TodoCounter };
