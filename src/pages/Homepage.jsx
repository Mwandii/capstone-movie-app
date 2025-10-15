import Hero from "../components/Hero";
import Movielist from "../components/Movielist";
import Navbar from "../components/Navbar";

function Homepage() {
    return (
        <div className="bg-stone-200">
        <Navbar/>
        <Hero/>
        </div>
    )
}

export default Homepage;