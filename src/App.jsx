import { TodoList } from "./TodoList"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { useEffect, useState } from "react"

export default function App() {
  // ... passes all the identifiers of that object or variable
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) {
      return []
    }
    return JSON.parse(localValue)
  })

  //"ITEMS is a property"
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos]) //second parameter says when any value in todos array changes

  function addTodo(newItem) {
        //takes the previous array and adds another element to it
        setTodos(currentTodos => { // pass a function for current value
        return [...currentTodos, //creates a copy of todo
          { id: crypto.randomUUID(), title: newItem, completed: false},
        ]
      }) //put a unique identifier if returning list items to a function
  }

  function toggleTodo(id, completed) {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed} //have to do this because todo is immutable
        }
        return todo
      })
    })
  }

function deleteTodo(id) {
    setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id )
    })
}

  return (
    <>
      <NewTodoForm addTodo = {addTodo}/>
      <TodoList todos = {todos} toggleTodo = {toggleTodo} deleteTodo = {deleteTodo}/>
    </>
  )
}