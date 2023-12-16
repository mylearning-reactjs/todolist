import React, {useState} from 'react'

interface ToDoFormProps {
  addToDo: (todo:string)=>void
}

export const TodoForm = ({addToDo}:ToDoFormProps) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e:any) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addToDo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}