import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../Services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SearchResults() {

    const [params] = useSearchParams();
    const query = params.get("query");

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['search', query],
        queryFn: () => fetchSearchResults(query),
        enabled: !!query,
    })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error: {error.message}</p>

    return (
         <div className="bg-stone-200">
            <Navbar/>
        <h2 className="text-xl font-semibold p-3">Search Results for {query}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6">
          {data.results.map((items) => (
            <div className="bg-white shadow-md rounded-lg flex flex-col h-full" >
              <img className="w-full h-48 object-cover" src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}/>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h4 className="text-lg font-bold">{items.title}</h4>
                <div className="flex flex-wrap text-gray-500 font-light text-sm">
                  <p className="m-1">{items.vote_average ? items.vote_average.toFixed(1) : "No rating yet"}</p>
                  <p className="m-1">{items.release_date?.slice(0, 4)}</p>
                  <p className="m-1">{items.media_type}</p>
                </div>
                <Link to={`/moviedetails/${items.id}`}>
                <button className="bg-black text-white text-sm p-2 rounded-md hover:bg-gray-700 hover:cursor-pointer bottom-2">Watch Now</button>
                </Link>
              </div>
            </div>
))}
        </div>
        <Footer/>
      </div>
    )
}

export default SearchResults;