import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <nav className="flex flex-wrap justify-between bg-white shadow-md p-5 items-center">
            <div className="mb-2 sm:mb-0">
                <Link to={'/'}><h1 className="font-bold text-2xl hover:scale-110">OneMoreEpisode</h1></Link>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
                <SearchBar/>
               <Link to={'/genrespage'}><button className="px-3 py-1 bg-black text-white rounded-md hover:bg-gray-700 hover:cursor-pointer"> Categories</button></Link>
            </div>
        </nav>
    )
}

export default Navbar;