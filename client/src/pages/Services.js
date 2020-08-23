import React from "react";
import { Animated } from "react-animated-css";

const Service = () => {
  return (
    <div>
      <section class='hero is-large services-container'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='heading-text text-center has-text-white'>Services</h1>
            <h2 class='subtitle'></h2>
          </div>
        </div>
      </section>
      <Animated animationIn='tada' animationOut='fadeOut' isVisible={true}>
        <section class='hero is-medium  is-bold'>
          <div class='hero-body'>
            <div class='container'>
              <div class='container'>
                <div class='container'>
                  <h1 class='title text-center'></h1>
                  <h2 class='subtitle text-center'></h2>
                  <div>
                    <br />
                    <div class='card'>
                      <div class='card-image'>
                        <figure class='image is-4by3'>
                          <img
                            src='/assets/images/demo16.JPG'
                            alt='Placeholder image'
                          />
                        </figure>
                      </div>
                      <div class='card-content'>
                        <div class='content text-center'>
                          “Always dedicated and devoted to providing an{" "}
                          <strong>exceptional </strong>
                          experience <strong>every time</strong>.”
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Animated>
      <section class='hero is-primary'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title text-center'>From start to finish,</h1>
            <h2 class='about-text-main text-center'>
              Ultra Demolition is committed to safety and the economical choice.
            </h2>
          </div>
        </div>
      </section>
      <br />
      <br />
      <div className='container'>
        <div className='container'>
          <article class='message'>
            <div class='message-header '>
              <h4>Demolition</h4>
            </div>

            <div class=' about-text-main message-body text-center'>
              The demolition process is more than just swinging a
              wrecking-ball-- it involves highly trained experts working with
              debris, weather conditions, materials, mass and physics. We employ
              only the highest of skilled experts whom are versed in all aspects
              of the demolition industry.
            </div>
          </article>
          <article class='message is-warning'>
            <div class='message-header'>
              <h4>Excavation</h4>
            </div>
            <div class='about-text-main message-body text-center'>
              Removing rock, dirt or other materials can be a dangerous
              circumstance. We have the tools, skill and know-how to get the job
              done right. We develop and implement the most innovative methods
              which will show a reduced expense to our clients.
            </div>
          </article>
          <article class='message'>
            <div class='message-header'>
              <h4>Removal</h4>
            </div>
            <div class='about-text-main message-body text-center'>
              Once the demolition process is complete, hauling away the debris
              will be done in a safe an efficient manner. Ultra Demolition will
              always put safety as well as our clients interest first.
            </div>
          </article>
        </div>
      </div>
      <div>
        <br />
        <section class='hero is-info is-large'>
          <div class='hero-body'>
            <div class='container'>
              <h1 class='title text-center'>
                Our goal is to provide savings to out clients
              </h1>
              <h2 class='about-text-main'>
                Our goal is to provide savings to out clients, in the most
                efficient and economical manner. We are also committed to
                complete all projects within the timeline set with our clients.
                Ultra Demolition will always put safety as well as our clients
                interest first.
              </h2>
              <br />
              <br />
              <div className='container'>
                <article class='message is-dark'>
                  <div class='message-body text-center'>
                    <p>
                      "From start to finish Ultra Demolition did a very
                      professional job. I will be using them again for any
                      future demolition needs."
                      <br />
                      <br />
                      -- Diana Torres
                    </p>
                  </div>
                </article>
                <br />
                <article class='message is-dark'>
                  <div class='message-body text-center'>
                    <p>
                      "The right company for the job. You’re in good hands with
                      Ultra Demolition. Honest, hard-working and determined to
                      perform a safe and well job done."
                      <br />
                      <br />
                      -— Scott Richards
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
