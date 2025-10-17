import Navbar from "../components/Navbar";

function GenrePage() {
    return (
        <>
        <Navbar/>
        <div>
            <h1 className="font-semibold text-3xl">Genres</h1>
        <div className="relative grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6">
            <div className="bg-gray-300 text-gray-800 shadow-md rounded-lg flex flex-col h-full p-10 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                <h1 className="font-semibold text-2xl">Name</h1>
            </div>
            <div className="bg-white shadow-md rounded-lg flex flex-col h-full p-10">
                <h1 className="font-semibold text-2xl">Name</h1>
            </div>
            <div className="bg-white shadow-md rounded-lg flex flex-col h-full p-10">
                <h1 className="font-semibold text-2xl">Name</h1>
            </div>
            </div>
        </div>
        </>
    )
}

export default GenrePage;