import { Link } from "react-router-dom";
import { SlideWindow } from "./HeroJS/Slide";

export function Slide(props) {
    return (<section className=" slider_section position-relative">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <SlideWindow postData={props.posts}/>
        </div>
        <div className="container">
            <div className="slider_nav-box">
                <div className="btn-box">
                    <Link to="/about">
                        Read More
                    </Link>
                </div>
                <div className="custom_carousel-control">
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </section>)
}