import React from 'react'
import './scss/projectGrid.css';
import 'aos/dist/aos.css';
import rebg from './photoSource/statonre.png';
import cryptobg from './photoSource/upCrypto.png'
import bo from './photoSource/break-out.png'
import pataTap from './photoSource/pata.png';
import rgb from './photoSource/rgb.png';

export default function ProjectGrid() {
    const realEstat = 'https://staton-real-estate.netlify.app';
    const breakOut = 'https://beautiful-malasada-c8848e.netlify.app/';
    const pata = 'https://suspicious-heyrovsky-63d4b0.netlify.app/';
    const rgb_link = 'https://precious-dusk-99e3ac.netlify.app';
    return (
        <div className="wrapper">
            <header class=" d-flex justify-content-center align-items-center flex-column">
                    <h2 className="header-text mb-4">My Projects</h2>
                    <div className="alert alert-warning p-4" role="alert">
                    <p className="fs-5">Hey 👋 The larger projects are a work in progress. Be sure to come back daily to check out newly commited changes and let me know what you think! Enjoy! </p>
                    </div>     
            </header>
        
        
              <div className="text-start d-flex align-items-center justify-content-center flex-column flex-lg-row flex-md-row flex-lg-wrap">
                <div data-aos="fade-up">
                  <div onClick={()=>window.location.href=`${realEstat}`} className="project text-white m-2 rounded" style={{background: `url(${rebg})`}}></div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <div className="project bg-dark text-white m-2 rounded" style={{background: `url(${cryptobg})`, backgroundSize: '100% 500px', backgroundRepeat: 'no-repeat'}}></div>
                </div>
              </div>
        
        <h2>Sub Projects</h2>
        <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row flex-md-row flex-lg-wrap">
            <div onClick={()=>window.location.href=`${breakOut}`} data-aos="fade-up"><div className="sub-project bg-dark text-white m-2 rounded" style={{background: `url(${bo})`, backgroundSize: 'contain', backgroundPosition: 'center'}}></div></div>
            <div onClick={()=>window.location.href=`${pata}`} data-aos="fade-up" data-aos-delay="200"><div className="sub-project bg-dark text-white m-2 rounded" style={{background: `url(${pataTap})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div></div>
            <div onClick={()=>window.location.href=`${rgb_link}`} data-aos="fade-up" data-aos-delay="400"><div className="sub-project bg-dark text-white m-2 rounded" style={{background: `url(${rgb})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div></div>
            
        </div>
      </div>
    )
}
