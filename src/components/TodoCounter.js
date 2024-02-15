function TodoCounter({ allTodosCounter, pendingTodosCounter }) {
  return (
    <p className="text-slateblue text-lg mt-1">
      {allTodosCounter
        ? `You've got ${pendingTodosCounter} tasks to do.`
        : "Create tasks to achieve more."}
    </p>
  );
}

export { TodoCounter };
