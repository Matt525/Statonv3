import React, { useState } from 'react';


const ContactForm = () => {
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                className="row align-items-center"
                style={{ height: "60vh" }}
              >
                <div className="col-lg-7 mb-5 mb-lg-0">
                  <h2
                    className="mb-5"
                    style={{ fontSize: "60px", fontWeight: "700" }}
                  >
                    Reach out to me.
                    <br /> It's easy.
                  </h2>
                            <form
                              className="border-end pe-5"
                              action="https://formspree.io/f/myyazjba"
                              method="POST"
                              id="contactForm"
                              name="contact"
                            >
                              <div className="row">
                                <div className="m-1">
                                  <input
                                    className="border-dark rounded p-3 w-100"
                                    type="text"
                                    name="first_name"
                                    id="fname"
                                    placeholder="First name"
                                  />
                                </div>
                                <div className="m-1">
                                  <input
                                    className="border-dark rounded p-3 w-100"
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12 m-1">
                                  <textarea
                                    className="border-dark rounded p-3 w-100"
                                    type="text"
                                    name="message"
                                    cols="30"
                                    rows="7"
                                    placeholder="Write your message"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12 m-2">
                                  <button
                                    type="submit"
                                    className="btn btn-secondary rounded-0 py-2 px-4"
                                  >
                                    Send Message
                                  </button>
                                  <span className="submitting"></span>
                                </div>
                              </div>
                            </form>
                  <div id="form-message-warning mt-4"></div>
                </div>
                <div className="col-lg-4 d-none d-md-block ml-auto mx-5">
                  <h3 className="mb-4 display-3">Talk Soon!</h3>
                  <ul className="contact-list">
                    <li className="my-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                      </svg>{" "}
                      <h6 className="contact-list-item"> </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
