import React, { useState } from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo'
import { IncompleteTodo } from './components/IncompleteTodo'
import { CompleteTodo } from './components/CompleteTodo'

function App() {

  const [todoText, setTodoText] = useState("")
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value)
  }

  const addTodo = () => {
    if (todoText == "") return;
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const deleteTodo = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1)
    setIncompleteTodos(newIncompleteTodos)
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setCompleteTodos(newCompleteTodos)
  }

  const backTodo = (index) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)
    setCompleteTodos(newCompleteTodos)
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setIncompleteTodos(newIncompleteTodos)
  }

  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  return (
   <>
     <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        addTodo={addTodo} 
      />
      <IncompleteTodo
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        todos={incompleteTodos}
       />
      <CompleteTodo 
        todos={completeTodos}
        backTodo={backTodo}
      />
   </>
  );
}

export default App;
