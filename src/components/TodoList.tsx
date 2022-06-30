import './styles.css'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos_heading">Active Tasks</span>
        {
          todos.map((todo) => (
            <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
          ))
        }
      </div>
      <div className="todos remove">
      <span className="todos_heading">Completed Tasks</span>
        {
          todos.map((todo) => (
            <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
          ))
        }
      </div>
    </div>
  )
}

export default TodoList