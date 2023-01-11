import React, { Component } from "react";
import Slider from "react-slick";
export default class SimpleSlider extends Component {

    state = {
        images: [
            "/assets/slide_1.jpg",
            "/assets/slide_2.jpg",
            "/assets/slide_3.jpg"
        ]
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
        };
        return (
            <div className="slider-container">
                <Slider style={{ width: "100%", height: "350px" }} {...settings}>
                    {this.state.images.map(image => (
                        <div>
                            <img style={{ width: "1024px", height: "350px" }} src={image} alt="Slide" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}