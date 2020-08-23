import React from "react";
import { Animated } from "react-animated-css";

const About = () => {
  return (
    <div>
      <section class='hero is-large about-banner'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='heading-text text-center has-text-white'>About</h1>
            <h2 class='subtitle'></h2>
          </div>
        </div>
      </section>

      <div className='container-fluid'>
        <div className='container'>
          <Animated
            animationIn='bounceInRight'
            animationOut='fadeOut'
            isVisible={true}
          >
            <section class='section'>
              <div class='container'>
                <h1 class='title text-center'>
                  Ultra Demolition is a company that takes pride in our work.
                </h1>
                <br />
                <h2 class='about-text-main text-center'>
                  We are committed to supplying superior results and are always
                  dedicated and devoted to provide an exceptional experience
                  every time.
                </h2>
              </div>
            </section>

            <section class='hero is-dark is-fullheight'>
              <div class='hero-body'>
                <div class='container'>
                  <h1 class='title text-center'></h1>
                  <h2 class='about-text-main text-center'>
                    On all of our projects, Ultra Demolition performs all the
                    demolition work with our own workforce. We employ only the
                    highest of skilled experts whom are versed in all aspects of
                    the demolition industry. Each and every member of our staff
                    are thoroughly trained in the most current health and safety
                    standards.
                  </h2>
                  <div>
                    <br />
                    <figure class='image is-square'>
                      <img src='/assets/images/demo11.JPG' />
                    </figure>
                  </div>
                </div>
              </div>
            </section>
          </Animated>
        </div>
      </div>
      <br />
      <hr />
      <hr />
      <br />
      <div class='tile is-ancestor'>
        <div class='tile is-vertical is-8'>
          <div class='tile'>
            <div class='tile is-parent is-vertical'>
              <article class='tile is-child notification is-primary grid-image-one'>
                <p class='title'></p>
                <p class='subtitle'></p>
              </article>
              <article class='tile is-child notification is-warning grid-image-two'>
                <p class='title'></p>
                <p class='subtitle'></p>
              </article>
            </div>
            <div class='tile is-parent'>
              <article class='tile is-child notification is-warning'>
                <p class='title text-center'>Now Serving</p>
                <p class='subtitle text-center'>
                  {" "}
                  all of <strong>Southeast</strong> Texas and{" "}
                  <strong>surrounding areas!</strong>
                </p>
                <figure class='image is-4by3'>
                  <img src='/assets/images/beaumont-map.png' />
                </figure>
              </article>
            </div>
          </div>
          <div class='tile is-parent'>
            <article class='tile is-child notification is-danger grid-image-three'>
              <p class='title'>Ultra</p>
              <p class='title'>Demolition</p>
              <div class='content'></div>
            </article>
          </div>
        </div>
        <div class='tile is-parent'>
          <article class='tile is-child notification is-success grid-image-four'>
            <div class='content'>
              <p class='title'></p>
              <p class='subtitle'></p>
              <div class='content'></div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
