import { useQuery } from "@tanstack/react-query";
import { trendingMovies } from "../Services/api";


function Movielist() {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: trendingMovies,
  })  


  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>Error: {error.message}</p>

    return (
        <div>
        <h1 className="font-semibold text-2xl">Trending</h1>
        <div>
            {data.results.map((movie) => (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            ))}
        </div>
        </div>
    )
}

export default Movielist;