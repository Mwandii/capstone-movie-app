import { FaChevronLeft, FaPlayCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MovieDetails() {
    return (
        <>
        <Navbar/>
        <div>
            <div className="relative h-[400px] w-full"
            style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1758786266285-3e56fdda1336?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdmllJTIwYmFja2Ryb3AlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500)`}}
            >
                <button className="absolute top-5 left-5 text-white text-2xl hover:cursor-pointer hover:text-gray-400">
                    <FaChevronLeft/>
                </button>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl hover:cursor-pointer hover:text-gray-400">
                <FaPlayCircle/>
                </button>
            </div>
            <div className="text-3xl font-semibold m-2 p-2">
            <h1>Title</h1>
            </div>
            <div className="font-light m-2 text-gray-600">
                <div className="m-3">
            <p>Rating: 7.9</p>
            </div>
            <div className="m-3">
            <p>Overview : </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione corrupti nemo rerum quo consectetur, repellendus, iusto iure nobis quaerat est velit? Debitis sapiente dolore architecto sed ipsa totam perspiciatis.</p>
            </div>
            <div className="m-3">
            <p>Release Date : </p>
            <p>11/10/2025</p>
            </div>
            <div className="m-3">
            <p>Genre :</p>
            <p>Comedy</p>
            </div>
            <div className="m-3">
            <p>Cast :</p>
            <p>Mahatma Ghandi, Bruce Lee, </p>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default MovieDetails;