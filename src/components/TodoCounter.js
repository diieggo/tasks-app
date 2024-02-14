function TodoCounter({ pendingTodosCounter }) {
  return (
    <p className="text-slateblue text-lg mt-1">
      You've got { pendingTodosCounter } tasks to do.
    </p>
  )
}

export { TodoCounter }