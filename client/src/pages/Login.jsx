import { useState } from "react";
import ICON from "../assets/icon.png";
import LoginForm from "../components/forms/LoginForm";
import SignUpForm from "../components/forms/SignUpForm";
const Login = () => {
  const [account, setAccount] = useState("login");

  return (
    <div className="grid place-items-center mt-24">
      <div className="flex border  border-gray-100 rounded-md shadow-md shadow-gray-400 justify-center flex-col text-center">
        <div className="flex bg-gray-200 p-1 flex-row justify-center overflow-hidden transition-opacity">
          <button className={`p-2 shadow  w-1/2 hover:bg-slate-300 ${account === "login" ? "bg-slate-300" : 'bg-gray-200'}`} onClick={() => {setAccount("login")}}>
            LOGIN
          </button>
          <button className={`p-2 shadow hover:bg-slate-300 w-1/2 ${account === "signup" ? "bg-slate-300" : 'bg-gray-200'}`} onClick={() => {setAccount("signup")}}>
            SIGNUP
          </button>
        </div>
        <div className="p-5">
          <div className=" my-2">
            <div className="flex justify-center align-middle items-center">
              <img src={ICON} alt="ICON..." className=" w-20" />
              <h1 className="text-slate-700 text-2xl font-bold">TO DO LIST</h1>
            </div>
            <p className="text-sm text-slate-500 font-semibold">
              📝 Manage Your Tasks 📝
            </p>
          </div>
          {account === "login" ? (
            <>
              <LoginForm/>
            </>
          ) : (
            <>
              <SignUpForm/>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
