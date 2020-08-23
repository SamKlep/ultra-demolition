import React from "react";
import { Animated } from "react-animated-css";

const Contact = () => {
  return (
    <div className=''>
      <section class='hero is-large contact-container'>
        <div class='hero-body'>
          <div class='container'>
            <p class='heading-text text-center has-text-white'>Contact</p>
          </div>
        </div>
      </section>
      <div className='container-fluid'>
        <div className='container'>
          <Animated
            animationIn='bounceInLeft'
            animationOut='fadeOut'
            isVisible={true}
          >
            <section class='section'>
              <div class='container'>
                <h1 class='title text-center'>
                  Here for all of your Demolition & Excavation needs!
                </h1>
                <br />
                <h2 class='subtitle text-center'></h2>
              </div>
            </section>
            <div className='container'>
              <div className='container'>
                <div className='container'>
                  <div className='container'>
                    <div className='container'>
                      <div className='container'>
                        <section class='hero is-light is-fullheight'>
                          <div class='hero-body'>
                            <div class='container'>
                              <h1 class='title text-center'></h1>
                              <h2 class='about-text-main text-center'>
                                Now serving all of Southeast Texas and
                                surrounding areas! Bonded & Insured
                              </h2>
                              <div>
                                <br />
                                <figure class='image is-square'>
                                  <img src='/assets/images/dirt2.jpg' />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </Animated>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class='container'>
        <div class='container'>
          <div class='container'>
            <div class='container'>
              <div class='container'>
                <div class='container'>
                  <div class='container'>
                    <div class='container'>
                      <section class='hero is-primary is-fullheight'>
                        <div class='hero-body'>
                          <div class='container'>
                            <h1 class='title text-center'>Contact us</h1>
                            <h2 class='about-text-main text-center'>
                              Don’t hesitate to reach out for a FREE quote
                              today!
                            </h2>

                            <div class='field'>
                              <label class='label'>
                                <h4>Name</h4>
                              </label>
                              <div class='control'>
                                <input
                                  class='input'
                                  type='text'
                                  placeholder='Text input'
                                />
                              </div>
                            </div>

                            <div class='field'>
                              <label class='label'>
                                <h4>Email</h4>
                              </label>
                              <div class='control has-icons-left has-icons-right'>
                                <input
                                  class='input is-danger'
                                  type='email'
                                  placeholder='Email input'
                                />
                                <span class='icon is-small is-left'>
                                  <i class='fas fa-envelope'></i>
                                </span>
                                <span class='icon is-small is-right'>
                                  <i class='fas fa-exclamation-triangle'></i>
                                </span>
                              </div>
                            </div>

                            <div class='field'>
                              <label class='label'>
                                <h4>Message</h4>
                              </label>
                              <div class='control'>
                                <textarea
                                  class='textarea'
                                  placeholder='Textarea'
                                ></textarea>
                              </div>
                            </div>

                            <div class='field is-grouped'>
                              <div class='control'>
                                <a href='mailto:ultrademolitiontx@gmail.com'>
                                  <button class='button is-link'>Submit</button>
                                </a>
                              </div>
                              <div class='control'>
                                <button class='button is-link is-light'>
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Contact;
