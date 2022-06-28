import { Todo } from '../model'
import './styles.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import TodoList from './TodoList'

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>
}

const SingleTodo = ({ todo, todos, setTodos}: Props) => {

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone} : todo)
  )}

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <form className="todos_single">
      {
        todo.isDone ? (
          <s className="todos_single--text">{todo.todo}</s>
        ) : (
          <span className="todos_single--text">{todo.todo}</span>
        )
      }

      <div>
        <span className="icon"><AiFillEdit /></span>
        <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
        <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
      </div>
    </form>
  )
}

export default SingleTodo