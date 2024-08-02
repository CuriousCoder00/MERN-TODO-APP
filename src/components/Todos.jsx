import { useContext } from "react"
import DataContext from "../context/DataContext"
import Todo from "./Todo"

const Todos = () => {
    const { todos } = useContext(DataContext)
  return (
    <div className="flex flex-col w-full h-full">
      Active Todos {todos.length}
      <div className="flex flex-col mt-3 overflow-y-auto">
        {todos.length > 0 ? (
          <>
            {todos.map((todo) => (
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
  )
}

export default Todos
