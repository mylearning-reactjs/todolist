import React, {useState} from 'react'
import {item} from '../interfaceList/ToDoInterface'
import {EditToDoFormProps} from '../interfaceList/ToDoInterface'

export const EditToDoForm=({...option}:EditToDoFormProps)=>{
    const [value, setValue] = useState(option.item.task);
    const handleSubmit = (e:any) => {
        // prevent default action
          e.preventDefault();
          // edit todo
          option.editTask(value, option.item.id);
        };
    return(<form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>)
}