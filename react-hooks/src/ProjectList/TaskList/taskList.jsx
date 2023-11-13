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
    setTaskList([...taskList, task])
    inputRef.current.value = "";
  }

  return (
    <>
      <div className="project-title">Task List</div>
      <form action="" onSubmit={handleAdd}>
        <input ref = {inputRef} onChange={handleChange} type="text" placeholder="Enter Task" name="task" id="task" />
        <button className="add-task-btn" type="submit" > Add Task </button>
      </form>

      <div className="display">
        <ul className="display-task">
          {
            taskList.map(task => 
            <li key={Math.floor(Math.random() * 1000000)} className="display-task__item">
            {task}
            </li>

          )}
        </ul>
      </div>
    </>
  )
}

export default TaskList