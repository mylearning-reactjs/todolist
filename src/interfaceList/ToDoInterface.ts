export interface item {
    id: string;
    task: string;
    completed:boolean,
    isEditing:boolean
    }

export interface ToDoProps {
    task: item;
    deleteTodo: (todo:string)=>void;
    editTodo:(todo:string)=>void;
    toggleComplete:(todo:string)=>void;
  }
  export interface EditToDoFormProps{
    item :item,
    editTask:(task:string,id:string)=>void
    }

   