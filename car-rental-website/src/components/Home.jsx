import Hero from "./Hero";
import FeaturedCars from "./FeaturedCars";
import VideoSection from "./VideoSection";


export default function Home(){
    return (
        <main>
            <Hero />
            <FeaturedCars />
            <VideoSection />
        </main>
    );
}