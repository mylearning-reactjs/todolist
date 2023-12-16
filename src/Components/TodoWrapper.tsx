import React from 'react'
import { v4 as uuidv4 } from "uuid";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditToDoForm } from "./EditTodoForm";



interface item {
  id: string;
  task: string;
  completed:boolean,
  isEditing:boolean
  }

export default function ToDoWrapper(){
  
    const [todos, setTodos] = React.useState<item[]>([])

    const addTodo = (todo:string) => {
        setTodos([...todos,{ id: uuidv4(), task: todo, completed: false, isEditing: false }]);
      }
    const deleteTodo = (id:string) => setTodos(todos.filter((todo) => todo.id !== id));
    const toggleComplete = (id:string) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
    const editTodo = (id:string) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        )
      );
    }
    const editTask = (task:string, id:string) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        )
      );
    };


    return (
        <div className="TodoWrapper">
           <TodoForm addToDo={addTodo} />
           {todos.map((todo) =>
            todo.isEditing?(<EditToDoForm editTask={editTask} item={todo} />
            ):(
            <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            />)
            )}
        </div>
      );
}