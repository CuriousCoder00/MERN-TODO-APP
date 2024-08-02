import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import DataContext from "../context/DataContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const { todos, setTodos, allTodos, setAllTodos, theme } =
    useContext(DataContext);
  const addTodo = (e) => {
    e.preventDefault();
    if (!input) return;
    setTodos([...todos, { id: todos.length + 1, todo: input }]);
    setAllTodos([...allTodos, { id: allTodos.length + 1, todo: input }]);
    setInput("");
    toast.success("Task added successfully");
  };
  return (
    <div>
      <form
        className="flex justify-center items-center p-1 fixed bottom-4 left-0 right-0 gap-2"
        onSubmit={addTodo}
      >
        <FaPlus />
        <input
          className="bg-transparent border-b md:w-1/2 w-3/4 px-2 focus:outline-none"
          type="text"
          placeholder="Add new task.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MdSend className="cursor-pointer" onClick={addTodo} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme={`${theme ? 'light' : 'dark'}`}
        />
      </form>
    </div>
  );
};

export default AddTodo;
