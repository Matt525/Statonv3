import React from "react";
import "./scss/Contact.scss";

export default function Contact() {
  return (
    <div>
      <div class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="row align-items-center" style={{ height: "60vh" }}>
                <div class="col-lg-7 mb-5 mb-lg-0">
                  <h2
                    className="mb-5"
                    style={{ fontSize: "60px", fontWeight: "700" }}
                  >
                    Reach out to me.
                    <br /> It's easy.
                  </h2>
                  <form
                    className="border-end pe-5"
                    method="POST"
                    data-netlify="true"
                    id="contactForm"
                    name="contact"
                  >
                    <div class="row">
                      <div class="m-1">
                        <input
                          className="border-dark rounded p-3 w-100"
                          type="text"
                          name="first_name"
                          id="fname"
                          placeholder="First name"
                        />
                      </div>
                      <div class="m-1">
                        <input
                          className="border-dark rounded p-3 w-100"
                          type="text"
                          name="last_name"
                          id="lname"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 m-1">
                        <input
                          className="border-dark rounded p-3 w-100"
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 m-1">
                        <textarea
                          class="border-dark rounded p-3 w-100"
                          name="message"
                          cols="30"
                          rows="7"
                          placeholder="Write your message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 m-2">
                        <button
                          type="submit"
                          name="submit"
                          value="Send Message"
                          class="btn btn-secondary rounded-0 py-2 px-4"
                        />
                        <span class="submitting"></span>
                      </div>
                    </div>
                  </form>
                  <div id="form-message-warning mt-4"></div>
                </div>
                <div class="col-lg-4 d-none d-md-block ml-auto mx-5">
                  <h3 class="mb-4 display-3">Talk Soon!</h3>
                  <ul className="contact-list">
                    <li className="my-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="currentColor"
                        class="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                      </svg>{" "}
                      <h6 className="contact-list-item">
                        {" "}
                        &nbsp;mstaton.dev@gmail.com
                      </h6>
                    </li>
                    <li className="my-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="currentColor"
                        class="bi bi-phone-vibrate-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM1.807 4.734a.5.5 0 1 0-.884-.468A7.967 7.967 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A6.967 6.967 0 0 1 1 8c0-1.18.292-2.292.807-3.266zm13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A7.967 7.967 0 0 0 16 8a7.967 7.967 0 0 0-.923-3.734zM3.34 6.182a.5.5 0 1 0-.93-.364A5.986 5.986 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A4.986 4.986 0 0 1 3 8c0-.642.12-1.255.34-1.818zm10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818 0 .642-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8c0-.769-.145-1.505-.41-2.182z" />
                      </svg>
                      <h6 className="contact-list-item"> &nbsp;843-457-8977</h6>
                    </li>

                    <li className="my-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="currentColor"
                        class="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>{" "}
                      <h6 className="contact-list-item">
                        {" "}
                        &nbsp;Charleston, South Carolina
                      </h6>
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
}
