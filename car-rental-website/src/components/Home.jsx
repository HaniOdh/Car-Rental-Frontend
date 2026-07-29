import Hero from "./Hero";
import FeaturedCars from "./FeaturedCars";
import VideoSection from "./VideoSection";
import Features from "./Features";


export default function Home(){
    return (
        <main>
            <Hero />
            <FeaturedCars />
            <VideoSection />
            <Features />
        </main>
    );
}