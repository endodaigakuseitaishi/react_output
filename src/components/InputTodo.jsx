import React from "react";

export const InputTodo = (props) =>  {
  const { todoText, onChange, addTodo } = props

  return (
    <div className="input-area">
      <input placeholder='todoを入力' value={todoText} onChange={onChange}/>
      <button onClick={addTodo}>追加</button>
    </div>
  )
}

