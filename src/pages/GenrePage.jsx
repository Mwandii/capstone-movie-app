import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { fetchMovieGenres } from "../Services/api";

function GenrePage() {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['genrePage'],
        queryFn: fetchMovieGenres
    })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error: {error.message}</p>

    return (
        <div className="flex flex-col min-h-screen">
        <Navbar/>
<div className="flex-grow">
            <h1 className="font-semibold text-3xl m-2">Genres</h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6">
            
        {data.genres.map((genres) => (
            <div key={genres.id} className="bg-gray-300 text-gray-800 rounded-xl p-6  shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg  hover:shadow-gray-500 hover:cursor-pointer flex items-center justify-center text-center">
                <h1 className="font-semibold text-xl break-words whitespace-normal leading-tight">{genres.name}</h1>
            </div>
        ))}
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default GenrePage;