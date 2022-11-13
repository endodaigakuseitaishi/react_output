import React from "react";

export const CompleteTodo = (props) => {
  const { todos, backTodo } = props
  return (
    <div className='complete-area'>
      <p className='title'>完了</p>
        <ul>
          {todos.map((todo, index) => {
            return (
            <div className='list-row' key={todo}>
              <li>{todo}</li>
              <button onClick={() => backTodo(index)}>戻す</button>
            </div>
              )
          })}
        </ul>
     </div>
  )
}