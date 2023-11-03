import MoviePoster from "../Assets/M1.jpg"
import HomeBanners from "../components/HomeBanners";
import HomeCarousel from "../components/HomeCarousel";
import HomeMovieCard from "../components/HomeMovieCard";
import Navbar from "../components/Navbar";
import IccBannerImage from '../Assets/p1.jpg';
import HomeFooter from "../components/HomeFooter";

function Home() {
    return (
        <>
            <Navbar />
            <HomeCarousel />
            <div className="min-h-[96rem] w-[80vw] mx-auto flex flex-col">
            <HomeBanners image={IccBannerImage} />
            <div className='text-2xl font-semibold text-black mt-4'>
                Recommended Movies
            </div>
                <div className="mt-8 flex justify-center items-center gap-10">
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />

                </div>
                <HomeBanners image={IccBannerImage} />
                <HomeFooter />
            </div>
        </>
    )

}

export default Home;