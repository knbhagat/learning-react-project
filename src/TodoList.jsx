
export function TodoList({todos, deleteTodo, toggleTodo}) {
    return (
    <>
        <h1 className = "header">
        Todo List
        </h1>
        <ul className = "list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
            return (
            <li key = {todo.id}> 
            <label>
                <input type = "checkbox" checked = {todo.completed} onChange = {e => toggleTodo(todo.id, e.target.checked)} />
                {todo.title}
            </label>
            <button className = "btn btn-danger" onClick = {() => deleteTodo(todo.id)}>
                Delete
            </button>
            </li>
            )})}
        </ul>
    </>
    )
}