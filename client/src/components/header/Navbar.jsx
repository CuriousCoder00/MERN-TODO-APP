import { CgDarkMode } from "react-icons/cg";

const Navbar = () => {
  return (
    <header className="bg-slate-200 text-zinc-900 shadow-sm shadow-slate-600">
      <nav className="flex justify-between text-xl p-5 align-middle">
        <div>
          <h1 className="font-bold ">📝 TO-DO List</h1>
        </div>
        <div className="text-2xl">
          <CgDarkMode/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
