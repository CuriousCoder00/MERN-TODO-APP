/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import DataContext from "../context/DataContext";


const Todo = ({ todo }) => {
  const [completed, setCompleted] = useState(false);
  const {
    completedTodos,
    setCompletedTodos,
    todos,
    setTodos,
    allTodos,
    setAllTodos,
    tab
  } = useContext(DataContext);
  const handleCompleted = () => {
    setCompleted(true);
    setCompletedTodos([...completedTodos, todo]);
    setTodos(todos.filter((item) => item.todo !== todo.todo));
    setAllTodos(
      allTodos.map((item) => {
        if (item.todo === todo.todo) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
  };
  return (
    <div
      className="flex justify-between items-center p-2 w-full border rounded-lg my-2 dark:hover:bg-slate-900 transition-colors delay-100 duration-100 ease-in-out shadow-md hover:bg-slate-200"
    >
      <div className={`block ${completed ? "line-through" : ""}`}>
        {todo.todo}
      </div>
      {tab !== "all" && (
        <button disabled={tab === "completed"} onClick={handleCompleted}>
          <FaCheck  />
        </button>
      )}
    </div>
  );
};


export default Todo;
