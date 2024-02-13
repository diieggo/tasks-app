function TodoItem({ title, description, completed }) {
    let todoTitleClass = "text-secondary text-xl font-medium "
    if (completed) {
        todoTitleClass = todoTitleClass.concat("line-through text-slateblue")
    }

    return (
      <li className="flex p-4 gap-4 bg-palewhite rounded-xl">
        <input type="checkbox" className="w-6 h-6 mt-[4px] bg-palewhite text-primary border-mutedazure border-2 rounded-md focus:ring-primary" checked={ completed } />
        <div>
            <h4 className={ todoTitleClass }>{ title }</h4>
            {
                description ? <p className="text-slateblue text-lg font-normal mt-2">{ description }</p> : ""
            }
        </div>
      </li>
    )
}

export { TodoItem }