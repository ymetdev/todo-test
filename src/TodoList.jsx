import React, { useState, useEffect, useRef } from "react"

function TodoList() {
  const [task, setTask] = useState(() => {
    // Retrieve task from localStorage
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [newTask, setNewTask] = useState("")
  const textareaRef = useRef(null)

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
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }
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
          <textarea
            ref={textareaRef}
            onChange={typeHandler}
            value={newTask}
            placeholder="Type here"
            className="placeholder-primarycl textarea textarea-bordered w-full max-w-xs mb-5 bg-backgroundcl text-text resize-none h-auto"
            rows={1}
            onInput={(e) => {
              e.target.style.height = "auto"
              e.target.style.height = `${e.target.scrollHeight}px`
            }}></textarea>
          <button
            onClick={addTask}
            className="hover:text-text btn bg-primarycl text-textcl font-bold">
            + Add Task
          </button>
        </div>
      </div>

      <div className="w-90 font-bold">
        {task.map((task, index) => (
          <div
            key={index}
            className="  bg-primarycl text-textcl px-5 py-2 rounded-lg mb-4 flex flex-row items-start justify-between break-words word-break">
            <p className="mr-2">{index + 1}.</p>
            <p className="w-52 break-words word-break mr-2">{task}</p>
            <button
              onClick={() => deleteTask(index)}
              className="btn bg-backgroundcl text-text border-none self-center">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
