import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAdd = (e) =>{
    e.preventDefault();
    const newItem = {
        id : new Date(),
        text: newTask,
        complete: false
    }
    setTasks([...tasks,newItem]);
    setNewTask("");
    console.log("todo",tasks)
  }

  const handleRemove=(id)=>{
    const updatTask = tasks.filter((item)=>item.id !== id);
    setTasks(updatTask);
  }

  const handleComplete=(id)=>{
    const completeTask = tasks.map((item)=>item.id === id ? {...item , complete:!item.complete}:item);
    setTasks(completeTask);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
       {tasks.map((item)=>{
       return(
        <li key={item.id} style={{textDecoration : item.complete ? "line-through" : "none"}}>{item.text} <button onClick={()=>handleComplete(item.id)}>{item.complete ? "undo" : "complete"}</button> <button onClick={()=>handleRemove(item.id)}>Remove</button> </li>
       ) 
       })}
      </ul>
      <div>
       <form action="" onSubmit={handleAdd}>
       <input
          type="text"
          name='newTask'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button type='submit'>Add Task</button>
       </form>
      </div>
    </div>
  );
};

export default TodoList;
