import './styles.css'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodos: Array<Todo>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className="container">
      <Droppable droppableId='TodosList'>
        {(provided, snapshot) => (
            <div className="todos" 
              ref={provided.innerRef} 
              { ...provided.droppableProps}
            >
              <span className="todos_heading">Active Tasks</span>
              {
                todos.map((todo, index) => (
                  <SingleTodo
                    index={index} 
                    todo={todo} 
                    todos={todos} 
                    setTodos={setTodos} 
                    key={todo.id} 
                  />
                ))
              }
              {provided.placeholder}
            </div>
        )}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided) => (
            <div className="todos remove" ref={provided.innerRef} { ...provided.droppableProps}>
              <span className="todos_heading">Completed Tasks</span>
              {
                completedTodos.map((todo, index) => (
                  <SingleTodo index={index} todo={todo} todos={completedTodos} setTodos={setCompletedTodos} key={todo.id} />
                ))
              }
              {provided.placeholder}
            </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList