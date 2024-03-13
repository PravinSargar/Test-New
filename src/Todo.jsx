import React, { useState } from 'react'

export const Todo = () => {
    const [item, setItem] = useState("");
    const [todo, setTodo] = useState([]);
    const [edit, setEdit] = useState("");
    const handleAdd=(e)=>{
        e.preventDefault();
        if(edit !== null){
          const update = todo.map((itemValue)=>itemValue.id !== edit ? {...itemValue, text:item}:itemValue);
          setTodo(update);
          setEdit(null);
          setItem("")
        }else{
            const newItem ={
                id: new Date(),
                text: item,
            }
            setTodo([...todo, newItem]);
            setItem("");
        }
    }

    const handleDelete=(id)=>{
        const update = todo.filter((item)=>item.id !== id);
        setTodo(update)
    }

    const handleEdit=(id)=>{
        const update = todo.find((item)=>item.id === id);
        setItem(update.text);
        setEdit(id);
    }
  return (
    <div>
        <h1>Todo</h1>
        <form action="">
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
            <button onClick={handleAdd}>Add todo</button>
        </form>
        <ul>
            {todo.map((item)=>{
                return(
                    <li key={item.id}>{item.text}<button onClick={()=>handleEdit(item.id)}>edit</button> <button onClick={()=>handleDelete(item.id)}>Delete</button></li>
                )
            })}
        </ul>
    </div>
  )
}
