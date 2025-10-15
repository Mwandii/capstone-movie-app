import { useQuery } from "@tanstack/react-query";
import { trendingMovies } from "../Services/api";

function TrendingMovies() {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['trendingMovies'],
        queryFn: trendingMovies
    })

    if(isLoading) return <p>Loading...</p>
    if (isError) return <p>Error: {error.message}</p>

    return (
      <div >
        <h2>Trending</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
          {data.results.slice(0, 15).map((movies) => (
            <div className="bg-white shadow-md rounded-lg" key={movies.id}>
              <img className="w-full h-48 object-cover" src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}/>
              <div className="p-4">
                <h4 className="text-lg font-bold">{movies.title}</h4>
                <div className="flex">
                  <p>{movies.vote_average ? movies.vote_average.toFixed(1) : "No rating yet"}</p>
                  <p>{movies.release_date?.slice(0, 4)}</p>
                  <p>{movies.media_type}</p>
                </div>
                <button>Watch Now</button>
              </div>
            </div>
))}
        </div>
      </div>
    );
}

export default TrendingMovies;