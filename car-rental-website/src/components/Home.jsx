import Hero from "./Hero";
import FeaturedCars from "./FeaturedCars";
import VideoSection from "./VideoSection";
import Features from "./Features";
import Footer from "./Footer";


export default function Home(){
    return (
        <main>
            <Hero />
            <FeaturedCars />
            <VideoSection />
            <Features />
            <Footer />
        </main>
    );
}