// Context Provider
import { useState } from "react";
import DataContext from "./DataContext";

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [allTodos, setAllTodos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [tab, setTab] = useState("all");
  const [theme, setTheme] = useState(false);
  const darkModeToggle = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    setTheme(!theme);
  };
  const handleTabs = (name) => {
    if (name === "active") {
      setTab("active");
    } else if (name === "completed") {
      setTab("completed");
    } else {
      setTab("all");
    }
  };
  return (
    <DataContext.Provider
      value={{
        todos,
        setTodos,
        allTodos,
        setAllTodos,
        completedTodos,
        setCompletedTodos,
        tab,
        setTab,
        darkModeToggle,
        handleTabs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
