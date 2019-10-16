import React, { useState, useReducer } from "react";
import { initialState, myReducer } from "../reducers/myReducer";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(myReducer, initialState);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="container">
      <h1>My To Do List</h1>
      <div className="form">
        <input
          className="title-input"
          type="text"
          name="newTitleText"
          placeholder="...todo"
          value={newTodo}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD", payload: newTodo });
            setNewTodo("");
          }}
        >
          Add Todo
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR" });
            setNewTodo("");
          }}
        >
          Clear Completed
        </button>
      </div>
      {state.todos.map(todo => (
        <div
          className={todo.completed ? "todo-item complete" : "todo-item"}
          onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
        >
          {" "}
          {todo.item}{" "}
        </div>
      ))}{" "}
    </div>
  );
}
