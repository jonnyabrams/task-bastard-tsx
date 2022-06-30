import React, { useState } from 'react'
import './App.css'
import InputField  from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'
import Bastard from './img/bastard.png'
import SpeechBubble from './img/do-yer-tasks.png'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Array<Todo>>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false }])
      setTodo("") //clears input field after
    }
  }

  return (
    <div className="App">
      <span>
        <img src={Bastard} style={{ height: "100px" }} />
        <img src={SpeechBubble} style={{ height: "100px" }} />
      </span>
      <span className="heading">Task Bastard</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App

