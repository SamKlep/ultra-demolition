import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className='container-fluid'>
      <Animated
        animationIn='bounceInLeft'
        animationOut='fadeOut'
        isVisible={true}
      >
        <div className='container'>
          <section class='section'>
            <div class='container'>
              <h1 class='title text-center'>
                Here for all of your Demolition & Excavation needs.
              </h1>
              <br />
              <h2 class='subtitle text-center'>
                Serving all of Southeast Texas and surrounding areas!
              </h2>
            </div>
          </section>
          <section class='hero is-light is-fullheight'>
            <div class='hero-body'>
              <div class='container'>
                <h1 class='title text-center'>About Us</h1>
                <p class='about-text-main text-center'>
                  Ultra Demolition is a company that takes pride in our work and
                  we are committed to supplying superior quality results. We are
                  always dedicated and devoted to providing an exceptional
                  experience every time.
                </p>
                <div>
                  <br />
                  <figure class='image is-square'>
                    <img
                      className='about-image'
                      src='/assets/images/machine1.jpg'
                      alt='bulldozer'
                    />
                  </figure>
                  <Link href='/about'>
                    <button class='button is-primary'>Learn more!</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Animated>
    </div>
  );
};

export default AboutUs;
