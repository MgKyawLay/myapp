import React from "react";
import "../App.css";

const Login = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-slate-200">
      <div className="bg-white w-96 h-96 rounded-xl p-5 space-y-10">
        <header className="text-2xl font-bold text-center">My React App</header>
        <div className="relative">
          <input
            type="email"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-200 peer "
            placeholder=" "
          />
          <label
            for="floating_outlined"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-green-200 peer-focus:dark:text-green-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white"
          >
            Username
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-200 peer "
            placeholder=" "
          />
          <label
            for="floating_outlined"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-green-200 peer-focus:dark:text-green-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white"
          >
            Password
          </label>
        </div>
        
        <button className="bg-black text-white p-3 rounded-lg w-full border">
            Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
