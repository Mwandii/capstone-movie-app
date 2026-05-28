import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        
        <Link
          to="/"
          className="text-2xl font-bold transition-transform duration-300 hover:scale-105 w-fit"
        >
          OneMoreEpisode
        </Link>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <SearchBar />

          <Link
            to="/genrespage"
            className="rounded-md bg-black px-4 py-2 text-center text-white transition-colors duration-300 hover:bg-gray-700"
          >
            Categories
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;