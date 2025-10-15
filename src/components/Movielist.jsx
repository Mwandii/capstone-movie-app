import { useQuery } from "@tanstack/react-query";
import { trendingMovies } from "../Services/api";
import TrendingMovies from "../categories/TrendingMovies";


function Movielist() {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: trendingMovies,
  })  


  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>Error: {error.message}</p>

    return (
        <div>
        <TrendingMovies/>
        </div>
    )
}

export default Movielist;