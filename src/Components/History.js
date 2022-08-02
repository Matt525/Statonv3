import React, { useEffect } from "react";
import "./scss/History.scss";
import "aos/dist/aos.css";
import Aos from "aos";

export default function History() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  });
  return (
    <div class="experience pt-0">
      <div class="container">
        <header class="text-center">
          <h2
            className="my-5 pt-0"
            style={{ fontSize: "40px", fontWeight: "700" }}
          >
            Working Experience
          </h2>
        </header>
        <div class="timeline">
          <div
            class="timeline-item left wow slideInLeft"
            style={{ textAlign: "left" }}
          >
            <div class="timeline-text" data-aos="slide-right">
              <div class="timeline-date">2020 - Present</div>
              <h2>Operations Manager</h2>
              <h4>Kellermeyer Bergensons Services, Charleston, SC</h4>
              <p>
                As an Operations Manager I utilize my team management & project
                leading skillset to provide results for high volume clients.
              </p>
            </div>
          </div>
          <div
            class="timeline-item right wow slideInRight"
            style={{ textAlign: "left" }}
          >
            <div class="timeline-text" data-aos="slide-left">
              <div class="timeline-date">2015 - 2020</div>
              <h2>Zone Manager</h2>
              <h4>Kellermeyer Bergensons Services, Myrtle Beach, SC</h4>
              <p>
                As a Zone manager, I gained valuable leadership & project
                management skills for high volume clients.
              </p>
            </div>
          </div>
          <div
            class="timeline-item left wow slideInLeft"
            style={{ textAlign: "left" }}
          >
            <div class="timeline-text" data-aos="slide-right">
              <div class="timeline-date">2014 - 2015</div>
              <h2>HVAC Tech</h2>
              <h4>Carolina Cool Inc. Surfside Beach, SC</h4>
              <p>
                As an hvac service technician, I upgraded my one on one customer
                service & client building skillset.
              </p>
            </div>
          </div>
          <div
            class="timeline-item right wow slideInRight"
            style={{ textAlign: "left" }}
          >
            <div class="timeline-text" data-aos="slide-left">
              <div class="timeline-date">2012 - 2014</div>
              <h2>Front Desk Manager</h2>
              <h4>Marriott, Myrtle Beach, SC</h4>
              <p>
                Front desk manager at Marriott Broadway at the Beach. Gained
                valuable customer service skills from this role.
              </p>
            </div>
          </div>
          <div
            class="timeline-item left wow slideInLeft"
            style={{ textAlign: "left" }}
          >
            <div class="timeline-text" data-aos="slide-right">
              <div class="timeline-date">2010 - 2012</div>
              <h2>CS Student</h2>
              <h4>Ohio University, Ironton, OH</h4>
              <p>
                During my attendance at Ohio University Southern Campus, I
                studied for my associates in computer science. This degree is
                non-graduate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
