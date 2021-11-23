import React from "react";
import { Carousel } from "react-bootstrap";
import carouselImage1 from "../../../images/home-bg-1.png";
import carouselImage2 from "../../../images/home-bg-2.png";
import carouselImage3 from "../../../images/home-bg-3.png";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage1} alt="First slide" />
        <Carousel.Caption
          className="text-start fw-bolder"
          style={{ marginBottom: "180px" }}
        >
          <h1 className="text-dark">Special Offer</h1>
          <h3 className="text-dark fw-bolder">Upto 50% Off. Find out more</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage2}
          alt="Second slide"
        />

        <Carousel.Caption
          className="text-start fw-bolder"
          style={{ marginBottom: "180px" }}
        >
          <h1 className="text-dark">Limited Offer</h1>
          <h3 className="text-dark fw-bolder">Grab your Deal Now.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage3} alt="Third slide" />

        <Carousel.Caption
          className="text-start fw-bolder"
          style={{ marginBottom: "180px" }}
        >
          <h1 className="text-dark">Explore your</h1>
          <h3 className="text-dark fw-bolder">Premium grade Glasses.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
