import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
 const navigate = useNavigate();
  const loginInitials = {
    username: "",
    password: "",
  };

  const [loginValue, setLoginValue] = useState(loginInitials);

  const onInputChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:5000/api/auth/login", {
        username: loginValue.username,
        password: loginValue.password,
      });
      const { user, token } = res.data;
      if (!user || !token) throw new Error("Invalid credentials");
      localStorage.setItem("@todo-app", JSON.stringify([...res]));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex mt-5 w-96 flex-col">
        <div className="my-2 text-start text-gray-500 flex flex-col">
          <label htmlFor="username" className=" text-lg">
            Username
          </label>
          <input
            type="text"
            className="border p-1 border-slate-400 rounded focus:border-blue-500 outline-none"
            placeholder="Enter Your Username.."
            id="username"
            name="username"
            onChange={onInputChange}
          />
        </div>
        <div className="my-2 text-start text-gray-500 flex flex-col">
          <label htmlFor="password" className=" text-lg">
            Password
          </label>
          <input
            type="password"
            className="border p-1 border-slate-400 rounded focus:border-blue-500 outline-none"
            placeholder="Enter Your Password.."
            id="password"
            name="password"
            onChange={onInputChange}
          />
        </div>
        <div className="mt-7 text-center text-gray-500">
          <button
            className="p-1 border border-slate-400 bg-slate-100 rounded w-full hover:bg-blue-600 hover:text-white"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
