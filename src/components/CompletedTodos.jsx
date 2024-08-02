import { useContext } from "react";
import DataContext from "../context/DataContext";
import Todo from "./Todo";

const CompletedTodos = () => {
  const { completedTodos } = useContext(DataContext);
  return (
    <div className="flex flex-col w-full h-full">
      Completed Todos {completedTodos.length}
      <div className="flex flex-col mt-3 overflow-y-auto">
        {completedTodos.length > 0 ? (
          <>
            {completedTodos.map((todo) => (
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

export default CompletedTodos;
