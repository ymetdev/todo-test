import React, { useState, useEffect } from "react"

function TodoList() {
  const [task, setTask] = useState(() => {
    // Retrieve task from localStorage
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [newTask, setNewTask] = useState("")

  useEffect(() => {
    // Save task to localStorage whenever task changes
    localStorage.setItem("tasks", JSON.stringify(task))
  }, [task])

  function typeHandler(event) {
    setNewTask(event.target.value)
    console.log(event.target.value)
  }

  function addTask() {
    if (newTask !== "") {
      setTask([...task, newTask])
      setNewTask("")
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index)
    setTask(updatedTask)
  }

  return (
    <div className="md:flex-row bg-backgroundcl h-screen flex flex-col justify-start md:justify-center items-center md:items-start pt-6">
      <div className="md:mr-5 mb-7 flex flex-col bg-textcl justify-center items-center w-max h-max p-10 rounded-xl">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-medium text-text text-xl mb-5">
            Enter Your Task...
          </h1>
          <input
            onChange={typeHandler}
            value={newTask}
            type="text"
            maxLength={14}
            placeholder="Type here"
            className="placeholder-primarycl input input-bordered w-full max-w-xs mb-5 bg-backgroundcl text-text"
          />
          <button
            onClick={addTask}
            className="btn bg-primarycl text-textcl font-bold">
            + Add Task
          </button>
        </div>
      </div>

      <div className="w-72 font-bold">
        {task.map((task, index) => (
          <p
            key={index}
            className="w-72 bg-primarycl text-textcl px-5 py-2 rounded-lg mb-4 flex items-center justify-between ">
            {index + 1}. {task}
            <button
              onClick={() => deleteTask(index)}
              className="btn bg-backgroundcl text-text border-none">
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  )
}

export default TodoList
