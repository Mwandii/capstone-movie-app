import { useQuery } from "@tanstack/react-query";
import { trendingMovies } from "../Services/api";
import TrendingMovies from "../categories/TrendingMovies";
import LatestMovies from "../categories/Newreleases";
import PopularTvshows from "../categories/PopularTvshows";
import ComingSoon from "../categories/Comingsoon";


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
        <LatestMovies/>
        <PopularTvshows/>
        <ComingSoon/>
        </div>
    )
}

export default Movielist;