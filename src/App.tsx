import React, { useState } from 'react'
import './App.css'
import InputField  from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'
import Bastard from './img/bastard.png'
import SpeechBubble from './img/do-yer-tasks.png'
import NiceOne from './img/nice-one.png'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Array<Todo>>([])
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false }])
      setTodo("") //clears input field after
    }
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    let add,
      active = todos,
      complete = completedTodos

    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = complete[source.index]
      complete.splice(source.index, 1)
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }

    setCompletedTodos(complete)
    setTodos(active)
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span>
          <img src={Bastard} style={{ height: "130px" }} alt="" />
          <img src={SpeechBubble} style={{ height: "130px" }} alt="" />
        </span>
        <span className="heading">Task Bastard</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
      </div>
    </DragDropContext>
  )
}

export default App

