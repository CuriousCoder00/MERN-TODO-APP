import { useContext } from "react";
import AddTodo from "../components/AddTodo";
import AllTodos from "../components/AllTodos";
import DataContext from "../context/DataContext";
import CompletedTodos from "../components/CompletedTodos";
import Todos from "../components/Todos";
import { ToastContainer } from "react-toastify";

const Main = () => {
  const { tab, theme } = useContext(DataContext);
  return (
    <div className="mt-20 flex justify-center mx-auto items-center md:w-1/2 w-3/4 h-[70%]">
      <div className="flex flex-col justify-start items-center h-[100%] p-5 w-full">
        {tab === "all" && <AllTodos />}
        {tab === "active" && <Todos />}
        {tab === "completed" && <CompletedTodos />}
      </div>
      <AddTodo />
      <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            theme={`${theme ? "light" : "dark"}`}
          />
    </div>
  );
};

export default Main;
