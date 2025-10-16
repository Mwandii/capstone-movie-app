import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero({ data, isLoading, isError }) {

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Could not fetch trending movies</p>

  const movies = data?.results?.slice(0, 6) || [];
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));

  if (!movies.length) return null;

  const current = movies[index];

  return (
    <div
        className="h-[400px] bg-cover bg-center relative m-5 rounded-2xl shadow-lg"
        style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${current.backdrop_path})`
  }}
    >
      <div className="flex flex-col justify-end text-white text-sm absolute inset-0 bg-black/50 p-10 rounded-2xl">
        <button onClick={prev} className="absolute top-30 left-5 text-white text-2xl bg-white/40 hover:bg-black/60 px-3 py-3 hover:cursor-pointer rounded-full">
          <FaChevronLeft />
        </button>
        <Link to={`/moviedetails/${current.id}`}><h3 className="text-xl hover:cursor-pointer">{current.title}</h3></Link>
        <p>{current.vote_average ? current.vote_average.toFixed(1) : "No rating yet"}</p>
        <p>
          {current.overview}
        </p>
        <button onClick={next} className="text-white text-2xl absolute right-5 top-30 bg-white/40 hover:bg-black/60 px-3 py-3 rounded-full hover:cursor-pointer">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Hero;
