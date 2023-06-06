import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import './TodoList.css'

import { getTodos, postTodo, updateTodo } from '../../services/todos.services'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState([])
  const [updateStatus, setUpdateStatus] = useState([])

  const listTodos = async () => {
    const res = await getTodos()
    setTodos(res)
    console.log(todos)
  }

  useEffect(() => {
    listTodos()
  }, [])

  const addTodo = () => {
    const data = {
      title: newTodo,
      completed: false
    }
    setTodos([data, ...todos])
    postTodo(data)
  }

  const complete = (id) => {
    const list = todos.map((t) => {
      if (t.id === id) {
        t.completed = true
      }
      return t
    })
    setTodos([...list])
  }

  return (
    <div className='wrapper'>
      <div className='add-task'>
        <input 
          type='text' 
          placeholder='New Todo...' 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type='button' onClick={addTodo}>Add ToDo</button>
      </div>
      {
        todos.map((task) => 
          <Todo 
            key={task.id} 
            id={task.id}
            title={task.title} 
            completed={task.completed}
            onComplete={complete}
          />)
      }
    </div>
  )
}

export default TodoList