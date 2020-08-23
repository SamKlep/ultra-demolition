import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <div className='container-fluid'>
      <Animated
        animationIn='bounceInLeft'
        animationOut='fadeOut'
        isVisible={true}
      >
        <div className='container'>
          <div className='container'>
            <section className='hero is-large'>
              <div className='hero-body'>
                <div className='container'>
                  <h1 className='title text-center '>What We Do</h1>
                  <h2 className='about-text-main text-center'>
                    Ultra Demolition is dedicated to providing the safest
                    workplace possible. Safety has played a huge role in the
                    success of this company, although this achievement has not
                    been acquired by safety alone. Our success has also been
                    attributed to our ability to analyze and evaluate a project.
                    We develop and implement the most innovative methods which
                    will equate in cost and time, which in turn will show a
                    reduced expense to our clients.
                  </h2>
                  <br />
                </div>
                <div>
                  <figure className='image is-square'>
                    <img src='/assets/images/demo13.JPG' />
                  </figure>
                  <Link to='/about'>
                    <button class='button is-primary'>Learn more!</button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Animated>
    </div>
  );
};

export default WhatWeDo;
