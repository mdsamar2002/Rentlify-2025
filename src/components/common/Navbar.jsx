import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="gap-5 hidden md:block">
        <NavLink
          to="/house"
          className="px-4 py-2 hover:bg-slate-100 focus:text-slate-500 rounded-full font-semibold"
        >
          Homes
        </NavLink>
        <NavLink
          to="/vehicle"
          className="px-4 py-2 hover:bg-slate-100 rounded-full focus:text-slate-500 font-semibold"
        >
          Vehicles
        </NavLink>
        <NavLink
          to="/host"
          className="px-4 py-2 hover:bg-slate-100 rounded-full font-semibold focus:text-slate-500"
        >
          Hosting
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
