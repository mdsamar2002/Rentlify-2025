import React from "react";
import { NavLink } from "react-router";
const Menubar = () => {
  return (
    <div>
      <nav className="flex flex-col justify-start shadow-lg rounded-xl  md:min-w-56 min-w-44 gap-5 md:p-5 p-4 bg-slate-200">
        <NavLink to="/login" className="hover:text-slate-500 font-semibold">
          Login
        </NavLink>
        <NavLink to="/signup" className="hover:text-slate-500 font-semibold">
          Signup
        </NavLink>
        <NavLink to="/profile" className="hover:text-slate-500 font-semibold">
          Profile
        </NavLink>
        <NavLink to="/wishlist" className="hover:text-slate-500 font-semibold">
          Wishlist
        </NavLink>
        <NavLink to="/about" className="hover:text-slate-500 font-semibold">
          About
        </NavLink>
        <NavLink
          to="/help-center"
          className="hover:text-slate-500 font-semibold"
        >
          Help Center
        </NavLink>
        <NavLink to="report" className="hover:text-slate-500 font-semibold">
          Report
        </NavLink>
        <NavLink to="/logout" className="hover:text-slate-500 font-semibold">
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Menubar;
