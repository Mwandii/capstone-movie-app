import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MovieDetails() {
    return (
        <>
        <Navbar/>
        <div>
            <div className="relative h-[400px] w-full"
            style={{backgroundImage: "url(https://images.unsplash.com/photo-1758786266285-3e56fdda1336?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdmllJTIwYmFja2Ryb3AlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500)"}}
            >
                <button className="absolute top-2 left-2 text-white">Back</button>
                <button className="absolute top-1/2 left-1/2 text-white text-center">Play</button>
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