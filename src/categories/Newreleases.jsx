import { useQuery } from "@tanstack/react-query";
import { latestMovies } from "../Services/api";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function LatestMovies() {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['latestMovies'],
        queryFn: latestMovies
    })

    if (isLoading) return <p><Loading/></p>
    if (isError) return <p>Error: {error.message}</p>

    return (
         <div>
        <h2 className="text-xl font-semibold p-3">New Releases</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6">
          {data.results.slice(0, 18).map((movies) => (
            <div className="bg-white shadow-md rounded-lg flex flex-col h-full" key={movies.id}>
              <img className="w-full h-48 object-cover" src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}/>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h4 className="text-lg font-bold">{movies.title}</h4>
                <div className="flex flex-wrap text-gray-500 font-light text-sm">
                  <p className="m-1">{movies.vote_average ? movies.vote_average.toFixed(1) : "No rating yet"}</p>
                  <p className="m-1">{movies.release_date?.slice(0, 4)}</p>
                  <p className="m-1">{movies.media_type}</p>
                </div>
                <Link to={`/moviedetails/${movies.id}`}>
                <button className="bg-black text-white text-sm p-2 rounded-md hover:bg-gray-700 hover:cursor-pointer bottom-2">Watch Now</button>
                </Link>
              </div>
            </div>
))}
        </div>
      </div>
    )
}

export default LatestMovies;