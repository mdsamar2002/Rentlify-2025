import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 border-2 border-slate-300  shadow-md p-5 md:max-w-sm max-w-xs mx-auto mt-14 rounded-xl">
      <h1 className="font-bold from-neutral-800 text-lg">Login or Signup</h1>
      <form className="flex flex-col justify-center items-center gap-6">
        <input
          type="email"
          name="email"
          placeholder="enter your email..."
          className="min-w-72 rounded-3xl p-2 items-start border-2 border-slate-200 outline-none focus:shadow-lg shadow-sm"
        />
        <input
          type="text"
          name="password"
          placeholder="enter your password..."
          className="min-w-72 rounded-3xl p-2 items-start border-2 border-slate-200 outline-none focus:shadow-lg shadow-sm"
        />
        <button className="text-lg font-bold bg-red-600 border-2 p-2 rounded-lg min-w-40 text-slate-700">
          Login
        </button>
      </form>
      <p className="font-medium">
        Don't have an account?
        <Link to="/signup" className="ml-2 text-slate-500">
          SignUp
        </Link>
      </p>
    </div>
  );
};

export default Login;
