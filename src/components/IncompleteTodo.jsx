import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, completeTodo, deleteTodo } = props
  return (
    <div className='incomplete-area'>
      <p className='title'>未完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div className='list-row' key={todo}>
              <li>{todo}</li>
              <button onClick={() => completeTodo(index)}>完了</button>
              {/* 関数に引数を渡す時は新しくアロー関数を渡す必要がある。 */}
              <button onClick={() => deleteTodo(index)}>削除</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}