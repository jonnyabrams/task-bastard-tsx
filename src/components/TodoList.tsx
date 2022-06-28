import './styles.css'
import { Todo } from '../model'

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map(todo => (
        <li>{ todo.todo }</li>
      ))}
    </div>
  )
}

export default TodoList