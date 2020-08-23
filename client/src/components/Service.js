import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <section class='hero is-medium is-primary is-bold'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title text-center'>Our Services</h1>
            <h2 class='about-text-main text-center'>
              Our goal is to provide savings to our clients, in the most
              efficient and economical manner. We are also committed to complete
              all projects within the timeline set with our clients. Ultra
              Demolition will always put safety as well as our clients interest
              first.
            </h2>
            <div>
              <br />{" "}
              <div className='container'>
                <div className='container'>
                  <div className='container'>
                    <div className='container'>
                      <div className='container'>
                        <div className='container'>
                          <div className='container'>
                            <div className='container'>
                              <div className='container'>
                                <div className='container'>
                                  <div className='container'>
                                    <div className='container'>
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
                                            “Always dedicated and devoted to
                                            providing an{" "}
                                            <strong>exceptional </strong>
                                            experience{" "}
                                            <strong>every time</strong>.”
                                          </div>
                                          <Link to='/services'>
                                            <button class='button is-warning'>
                                              Learn more!
                                            </button>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h1></h1>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
