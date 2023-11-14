import React, { useRef, useState } from 'react'
import "../style.css"
import "./taskList.css"

const TaskList = () => {

  const [task, setTask] = useState("");
  const[taskList, setTaskList] =  useState([])

  const inputRef = useRef("")

  function handleChange(e)
  {
    setTask(e.target.value);
  }

  function handleAdd(e)
  {
    e.preventDefault();
    let taskItem = {
      id: Math.floor(Math.random() * 1000000),
      name: task
    }
    setTaskList([...taskList, taskItem])
    inputRef.current.value = "";
  }

  function handleDelete(id)
  {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  return (
    <>
      <div className="project-title mt">Task List</div>
      <form action="" onSubmit={handleAdd}>
        <input ref = {inputRef} onChange={handleChange} type="text" placeholder="Enter Task" name="task" id="task" />
        <button className="add-task-btn" type="submit" > Add Task </button>
      </form>

      <div className="display">
        <ul className="display-task">
          {
            taskList.map(task => (
            <li key={task.id} className="display-task__item">
            <span>{task.name}</span>

            <button className="delete-task-btn" onClick={() => handleDelete(task.id)}>delete</button>
            </li>

          ))}
        </ul>
      </div>
    </>
  )
}

export default TaskList