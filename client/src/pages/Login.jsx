import { useState } from "react";
import ICON from "../assets/icon.png";
import LoginForm from "../components/forms/LoginForm";
import SignUpForm from "../components/forms/SignUpForm";
const Login = () => {
  const [account, setAccount] = useState("login");

  return (
    <div className="grid bg-slate-800 min-h-screen place-items-center">
      <div className="flex border  border-gray-600 rounded-md shadow-md shadow-gray-600 justify-center flex-col text-center">
        <div className="flex flex-row text-white justify-center overflow-hidden transition-opacity rounded">
          <button className={`p-2 shadow  w-1/2 hover:bg-slate-500 ${account === "login" ? "bg-slate-600" : 'bg-gray-400'}`} onClick={() => {setAccount("login")}}>
            LOGIN
          </button>
          <button className={`p-2 shadow hover:bg-slate-500 w-1/2 ${account === "signup" ? "bg-slate-600" : 'bg-gray-400'}`} onClick={() => {setAccount("signup")}}>
            SIGNUP
          </button>
        </div>
        <div className="p-5">
          <div className=" my-2">
            <div className="flex justify-center align-middle items-center">
              <img src={ICON} alt="ICON..." className=" w-20" />
              <h1 className="text-slate-500 text-2xl font-bold">TO DO LIST</h1>
            </div>
            <p className="text-sm text-slate-500 font-semibold">
              Manage Your Tasks
            </p>
          </div>
          {account === "login" ? (
            <>
              <LoginForm/>
            </>
          ) : (
            <>
              <SignUpForm setAccount={setAccount}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
