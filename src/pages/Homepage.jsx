import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Movielist from "../components/Movielist";
import Navbar from "../components/Navbar";
import { trendingMovies } from "../Services/api";
import MovieDetails from "./MovieDetails";

function Homepage() {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['trendingMovies'],
        queryFn: trendingMovies
    })

    return (
        <div className="bg-stone-200">
        <Navbar/>
        <Hero data={data} isLoading={isLoading} isError={isError} />
        <Movielist/>
        <Footer/>
        </div>
    )
}

export default Homepage;