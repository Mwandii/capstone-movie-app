import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search.trim()) return;

        navigate(`/search?query=${encodeURIComponent(search)}`)

        setSearch("")
    }

    return (
        <form className="flex items-center">
            <input className="border rounded-full p-2 m-2 border-transparent bg-gray-400 shadow-md text-white font-light outline-none focus:outline-none" placeholder="Search..."/>
            <button className="hover:cursor-pointer hover:scale-115">
            <FaSearch className="text-2xl m-2 text-gray-600"/>
            </button>
        </form>
    )
}

export default SearchBar;