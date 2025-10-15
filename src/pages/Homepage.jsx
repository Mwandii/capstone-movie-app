import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import Movielist from "../components/Movielist";
import Navbar from "../components/Navbar";

function Homepage() {
    return (
        <div className="bg-stone-200">
        <Navbar/>
        <Hero/>
        <Movielist/>
        <Footer/>
        </div>
    )
}

export default Homepage;