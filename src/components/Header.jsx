import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Header = () => {
  const { theme, darkModeToggle, handleTabs } = useContext(DataContext);

  return (
    <div className="flex fixed top-3 left-0 right-0 justify-center items-center mx-auto rounded-xl border md:w-1/2 w-[90%] shadow-xl">
      <div
        className="p-3 cursor-pointer uppercase"
        onClick={() => handleTabs("all")}
      >
        all tasks
      </div>
      <div
        className="p-3 cursor-pointer uppercase"
        onClick={() => handleTabs("active")}
      >
        active tasks
      </div>
      <div
        className="p-3 cursor-pointer uppercase"
        onClick={() => handleTabs("completed")}
      >
        completed
      </div>
      <div className="fixed right-10">
        <button className="p-2 cursor-pointer" onClick={() => darkModeToggle()}>
          {theme ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
