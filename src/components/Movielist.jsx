import TrendingMovies from "../categories/TrendingMovies";
import LatestMovies from "../categories/Newreleases";
import PopularTvshows from "../categories/PopularTvshows";
import ComingSoon from "../categories/Comingsoon";

function Movielist() {
  return (
    <div>
      <TrendingMovies />
      <LatestMovies />
      <PopularTvshows />
      <ComingSoon />
    </div>
  );
}

export default Movielist;
