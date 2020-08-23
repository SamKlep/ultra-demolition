import React from "react";
import { Carousel } from "react-bootstrap";
import { Animated } from "react-animated-css";

const Main = () => {
  return (
    <div className='container'>
      <Animated
        animationIn='bounceInLeft'
        animationOut='fadeOut'
        isVisible={true}
      >
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-image'
              src='/assets/images/demo3-4.jpg'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-image'
              src='/assets/images/demo2.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-image'
              src='/assets/images/demo4.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-image'
              src='/assets/images/demo9.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-image'
              src='/assets/images/demo17.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-image'
              src='/assets/images/dirt1.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-image'
              src='/assets/images/house1_carousel.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-image'
              src='/assets/images/machine1.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 carousel-image'
              src='/assets/images/demo1.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
        </Carousel>
      </Animated>
    </div>
  );
};

export default Main;
