import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const ToDoList = () => {
  const [todo, setTodo] = useState('')  //guru
  const [todoArray, setTodoArray] = useState([])


  const addtodo = () => {
    const newtodoObj = {
      title: todo, //guru
      complted: false
    }
    axios.post('  http://localhost:3001/posts', newtodoObj)
      .then(() => {
        alert('data posted')
      })
      .catch(() => {
        alert('data not posted')
      })
  }

  return (
    <div>
      <label htmlFor="Todo">Todo : </label>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} /> <br />

      <button onClick={addtodo}>Add Todo</button>
      {/* guru */}
    </div>
  )
}

export default ToDoList