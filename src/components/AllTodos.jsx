import { useContext } from "react";
import DataContext from "../context/DataContext";
import Todo from "./Todo";

const AllTodos = () => {
  const { allTodos } = useContext(DataContext);
  return (
    <div className="flex flex-col w-full h-full">
      All Todos {allTodos.length}
      <div className="flex flex-col mt-3 overflow-y-auto">
        {allTodos.length > 0 ? (
          <>
            {allTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </>
        ) : (
          <div className="flex justify-center text-slate-700">
            There&apos;s nothing to show here please add tasks..
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTodos;
