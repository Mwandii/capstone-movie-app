import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedSearch = search.trim();

    if (!trimmedSearch) return;

    navigate(`/search?query=${encodeURIComponent(trimmedSearch)}`);

    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center gap-2 sm:w-auto"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movies..."
        aria-label="Search movies"
        className="w-full rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-black shadow-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-black focus:ring-2 focus:ring-gray-300 sm:w-64"
      />

      <button
        type="submit"
        aria-label="Search"
        className="rounded-full p-2 transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
      >
        <FaSearch className="text-xl text-gray-700" />
      </button>
    </form>
  );
}

export default SearchBar;