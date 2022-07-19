import { Bg } from "./Bg";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";




export function Hero() {
    return (<div className="hero_area">
        <Nav/>
        <Bg/>
        <Footer/>
    </div>)
}