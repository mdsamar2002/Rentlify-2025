import React, { useState } from "react";
import { Link } from "react-router";
import Search from "../common/Search";
import Navbar from "../common/Navbar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menubar from "../common/Menubar";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <header className="shadow-md">
      <div className="flex flex-col max-w-7xl m-auto p-3">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg md:text-xl">
            <Link to="/">
              <span className="text-slate-500">Rent</span>
              <span className="text-slate-700">Lify</span>
            </Link>
          </div>
          <Navbar />
          <button
            className="flex justify-between items-center bg-slate-200 rounded-3xl md:min-w-24 min-w-14 p-1 shadow-md"
            onClick={() => setisOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="ml-2" />
            <div className="rounded-full ml-2 w-10 h-10 bg-white shadow-md">
              Im
            </div>
          </button>
        </div>
        <Search />
      </div>
      <div className={`${isOpen ? "block" : "hidden"} absolute top-16 md:right-18 right-8`}>
        <Menubar />
      </div>
    </header>
  );
};

export default Header;
