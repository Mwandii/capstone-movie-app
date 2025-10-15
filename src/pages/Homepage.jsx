import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Homepage() {
    return (
        <div className="bg-stone-200">
        <Navbar/>
        <Hero/>
        <Footer/>
        </div>
    )
}

export default Homepage;