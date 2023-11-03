import MoviePoster from "../Assets/M1.jpg"
import HomeCarousel from "../components/HomeCarousel";
import HomeMovieCard from "../components/HomeMovieCard";
import Navbar from "../components/Navbar";

function Home(){
    return(
        <>
        <Navbar />
        <HomeCarousel />

        <div className="mt-8 flex justify-center items-center gap-10">
            <HomeMovieCard movieImage={MoviePoster}/>
            <HomeMovieCard movieImage={MoviePoster}/>
            <HomeMovieCard movieImage={MoviePoster}/>
            <HomeMovieCard movieImage={MoviePoster}/>

        </div>
        Home
        </>
    )
}

export default Home;