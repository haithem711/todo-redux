import React from 'react'
import TodoList from './components/TodoList'
import './App.css'
import AddTodo from './components/AddTodo'

const App = () => {
  return (
      <div className ="container">
        <div className="add">
      <div className="head">
        <h1 className="titre">Daily Todo List</h1>
      </div>
      <AddTodo />
      </div>
      <TodoList/>
    </div>
  )
}

export default App
