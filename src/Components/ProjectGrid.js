import React from 'react'
import './scss/projectGrid.css';
import 'aos/dist/aos.css';




export default function ProjectGrid() {
    let realEstat = 'https://www.google.com/';
    return (
        <div className="wrapper">
            <header class="text-center mx-5 pt-5">
                    <h2 className="header-text mb-4">My Projects</h2>
            </header>
        <div className="text-start d-flex align-items-center justify-content-center flex-column flex-lg-row flex-md-row flex-lg-wrap">
          <div data-aos="fade-up">
            <div onClick={()=>window.location.href=`${realEstat}`} className="project bg-dark text-white m-2 rounded"></div>
            <div className="ms-2">
              <p className="display-4">Title here</p>
              <p className="lead">Brief description goes here</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="project bg-dark text-white m-2 rounded"></div>
            <div className="ms-2">
              <p className="display-4">Title here</p>
              <p className="lead">Brief description goes here</p>
            </div>
          </div>
        </div>
  
        <h2>Sub Projects</h2>
        <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row flex-md-row flex-lg-wrap">
            <div data-aos="fade-up"><div className="sub-project bg-dark text-white m-2 rounded"></div></div>
            <div data-aos="fade-up" data-aos-delay="200"><div className="sub-project bg-dark text-white m-2 rounded"></div></div>
            <div data-aos="fade-up" data-aos-delay="400"><div className="sub-project bg-dark text-white m-2 rounded"></div></div>
            
        </div>
      </div>
    )
}
