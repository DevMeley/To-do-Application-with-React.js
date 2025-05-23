import { useEffect, useState } from "react";
import TodoItems from "./TodoItems";
import style from "./Input.module.css";
import { getItem, setItem } from "./utils/LocalStorage";

export default function Input() {
  // code for the input state
  const [input, setInput] = useState({ name: "", done: false });

  // code to collect input as todo array
  const [todos, setTodos] = useState(() => {
    const item = getItem("todos");
     return Array.isArray(item) ? item : []
  });

  const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput({ name: "", done: false });
  };

  useEffect(() => {
    setItem("todos", todos);
  }, [todos]);

  const completedTask = todos.filter((todoItem) => todoItem.done).length;

  const numberOfTodos = todos.length;

  return (
    <div className={style.input}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Add your to-do"
          type="text"
          value={input.name}
          onChange={(e) => setInput({ name: e.target.value, done: false })}
        />
        <button className={style.submitbtn} type="submit">
          Add
        </button>
      </form>

      {sortedTodos.map((todo) => (
        <TodoItems
          key={todo.name}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      <div className={style.deev}>
        <h4>Number of Task: {numberOfTodos}</h4>
        <h4>Completed Tasks: {completedTask}</h4>
      </div>
    </div>
  );
}
