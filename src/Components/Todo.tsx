import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
import {item,ToDoProps}  from '../interfaceList/ToDoInterface'


export const Todo = ({task, deleteTodo, editTodo, toggleComplete}:ToDoProps) => {
    return (
      <div className="Todo">
          <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
          <div>
          <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
          <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
          </div>
      </div>
    )
  }