import React, { useState } from 'react'

const ToDoList = () => {
    const [tasks,setTasks] = useState([])
    const [newTask,setNewTask] = useState("")

    const addTask = ()=>{
        setTasks([...tasks,newTask])
        setNewTask("")
    }

    const removeTask = (index)=>{
        const remove = [...tasks]
        remove.splice(index,1)
        setTasks(remove)
        console.log(remove)
    }
  return (
    <div>
        <div>
            <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
        </div>
        {tasks.map((task,index)=>(
            <div key={index}>
                <h4>{task}</h4>
                <button onClick={removeTask}>X</button>
            </div>
        ))}
    </div>
  )
}

export default ToDoList