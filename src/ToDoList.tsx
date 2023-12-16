import React from 'react'

interface item {
  id: number;
  text: string;
  completed:boolean
  }

export default function Todolist(){
  
    const [todos, settodos] = React.useState<item[]>([
      { id: 1,text:"Learn React",completed:false},
      { id: 2,text:"Create ToDo App",completed:false}
    ]);

    function addItem(formData:FormData){

    }
    return (
       <div></div>
      );
}