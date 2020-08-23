import React from "react";
import { Carousel } from "react-bootstrap";
import { Animated } from "react-animated-css";

const Main = () => {
  return (
    <div className='container'>
      <div className='container'>
        <div className='container'>
          <div className='container'>
            <div className='container'>
              <div className='container'>
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
                          src='/assets/images/demo3-4-resize.jpg'
                          alt='First slide'
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className='d-block w-100 carousel-image'
                          src='/assets/images/demo2_-resize.jpg'
                          alt='Third slide'
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className='d-block w-100 carousel-image'
                          src='/assets/images/demo4-resize.jpg'
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
                          src='/assets/images/demo16.JPG'
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
                          src='/assets/images/dirt3.JPG'
                          alt='Third slide'
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Animated>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
