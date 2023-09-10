import { CgDarkMode, CgUser } from "react-icons/cg";

const Navbar = () => {
  return (
    <header className="bg-slate-200 w-full fixed text-zinc-900 shadow-sm shadow-slate-600">
      <nav className="flex justify-between text-xl p-3 align-middle">
        <div>
          <h1 className="font-bold ">📝 TO-DO List</h1>
        </div>
        <div className="text-2xl cursor-pointer hover:text-gray-700">
          <CgDarkMode />
        </div>
      </nav>
      <nav className="flex justify-end text-xl py-2 px-9 gap-6 align-middle">
        <span>
          <h1 className="font-bold inline">LOGGED IN AS USER</h1>
        </span>
        <span>
          <CgUser className="text-3xl bg-slate-600 rounded-full text-white hover:bg-gray-300 hover:text-black p-1 cursor-pointer transition-all" />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
