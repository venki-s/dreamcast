import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ContentImage from "../../images/content/ContentImages";

export default function carouselslides(props) {
  return (
    <div sytle={{ border: "1px solid red" }}>
      <Carousel fade>
        <Carousel.Item>
          <ContentImage image={"reel"}></ContentImage>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ContentImage image={"film1"}></ContentImage>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ContentImage image={"film2"}></ContentImage>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
