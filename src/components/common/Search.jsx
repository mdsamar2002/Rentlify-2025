import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Search = () => {
  return (
    <div>
      <form className="border-solid border-2 shadow-md rounded-full flex justify-center items-center md:max-w-2xl max-w-xs m-auto p-2 mt-2">
        <input
          type="search"
          placeholder="Find your lessor"
          className="focus:outline-none px-4 py-2 hover:bg-slate-100 focus:text-slate-500 rounded-full mr-3"
        />
        <span className="text-slate-200 hidden md:block">|</span>
        <input
          type="date"
          name="Lease start date"
          className="focus:outline-none border-none px-4 py-2 hover:bg-slate-100 focus:text-slate-500 rounded-full hidden md:block"
        />
        <span className="text-slate-200 hidden md:block">|</span>
        <input
          type="date"
          placeholder="Lease end date"
          className="focus:outline-none  px-4 py-2 hover:bg-slate-100 focus:text-slate-500 rounded-full hidden md:block"
        />
        <span className="text-slate-200">|</span>
        <FontAwesomeIcon
          icon={faSearchengin}
          className="ml-3 p-2 h-6 w-6 rounded-full bg-slate-200 text-slate-500"
        />
      </form>
    </div>
  );
};

export default Search;
