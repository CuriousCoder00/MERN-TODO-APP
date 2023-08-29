

const LoginForm = () => {
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
                  />
                </div>
                <div className="mt-7 text-center text-gray-500">
                  <button className="p-1 border border-slate-400 bg-slate-100 rounded w-full hover:bg-blue-600 hover:text-white">
                    Login
                  </button>
                </div>
                
              </div>
    </div>
  )
}

export default LoginForm
