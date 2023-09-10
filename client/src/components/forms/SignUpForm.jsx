import { useState } from "react";
import axios from "../../api/axios.js";

const SignUpForm = ({ setAccount }) => {
  const signupInitialValues = {
    name: " ",
    username: " ",
    password: " ",
  };

  const [signupValue, setSignupValue] = useState(signupInitialValues);

  const onInputChange = (e) => {
    setSignupValue({ ...signupValue, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post('http://localhost:5000/api/auth/register', {
        name: signupValue.name,
        username: signupValue.username,
        password: signupValue.password
      });
      const {user, token} = res.data;
      if(!user || !token) throw new Error('Invalid credentials');
      localStorage.setItem('@todo-app', JSON.stringify([...res]));
      setSignupValue(signupInitialValues)
      setAccount('login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex mt-5 w-96 flex-col">
        <div className="my-2 text-start text-gray-500 flex flex-col">
          <label htmlFor="name" className=" text-lg">
            Name
          </label>
          <input
            type="text"
            className="border p-1 border-slate-400 rounded focus:border-gray-500 outline-none bg-slate-600 text-gray-300"
            placeholder="Enter Your Name.."
            id="name"
            name="name"
            onChange={onInputChange}
          />
        </div>
        <div className="my-2 text-start text-gray-500 flex flex-col">
          <label htmlFor="username" className=" text-lg">
            Username
          </label>
          <input
            type="text"
            className="border p-1 border-slate-400 rounded focus:border-gray-500 outline-none bg-slate-600 text-gray-300"
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
            className="border p-1 border-slate-400 rounded focus:border-gray-500 outline-none bg-slate-600 text-gray-300"
            placeholder="Enter Your Password.."
            id="password"
            name="password"
            onChange={onInputChange}
          />
        </div>
        <div className="mt-7 text-center text-gray-500">
          <button
            className="p-1 border border-slate-400 bg-gray-600 rounded w-full hover:bg-blue-600 text-white"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
SignUpForm.propTypes;