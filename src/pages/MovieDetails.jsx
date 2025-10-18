import { FaChevronLeft, FaPlayCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../Services/api";
import Loading from "../components/Loading";
import ErrorDisplay from "../components/ErrorDisplay";

function MovieDetails() {

    const { id } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['moviedetails', id],
        queryFn: fetchMovieDetails
    })

     if (isLoading) return <p><Loading/></p>;
     if (isError) return <p><ErrorDisplay/></p>

    return (
        <>
        <Navbar/>
        <div className="opacity-0 animate-fadeIn">
            <div className="relative h-[400px] bg-cover bg-center"
            style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
                 url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`}}
            >
                <Link to={'/'}><button className="absolute top-5 left-5 text-white text-2xl hover:cursor-pointer hover:text-gray-400">
                    <FaChevronLeft/>
                </button>
                </Link>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl hover:cursor-pointer hover:text-gray-400">
                <FaPlayCircle/>
                </button>
            </div>
            <div className="text-3xl font-semibold m-2 p-2">
            <h1>{data.title}</h1>
            </div>
            <div className="font-light m-2 text-gray-600">
                <div className="m-3">
            <p>{data.vote_average ? data.vote_average.toFixed(1) : "No rating yet"}</p>
            </div>
            <div className="m-3">
            <p>Overview : </p>
            <p>{data.overview}</p>
            </div>
            <div className="m-3">
            <p>Release Date : </p>
            <p>{data.release_date}</p>
            </div>
            <div className="m-3">
            <p>Genre :</p>
            <p>{data.genres.map((g) => g.name).join(', ')}</p>
            </div>
            <div className="m-3">
            <p>Duration :</p>
            <p>{data.runtime} mins</p>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default MovieDetails;