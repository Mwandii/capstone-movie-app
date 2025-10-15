function Navbar() {
    return (
        <nav className="flex flex-wrap justify-between bg-white shadow-md p-5 items-center">
            <div className="mb-2 sm:mb-0">
                <h1 className="font-bold text-2xl">OneMoreEpisode</h1>
            </div>
            <div className="flex flex-wrap gap-2">
                <input className="border w-40 sm:w-48 md:w-56 lg:w-64 p-2 border-stone-300 rounded-2xl text-sm font-thin" type="text" placeholder="Search..."/>
                <button className="px-3 py-1 bg-black text-white rounded-md">Search</button>
                <button className="px-3 py-1 bg-black text-white rounded-md">Categories</button>
            </div>
        </nav>
    )
}

export default Navbar;