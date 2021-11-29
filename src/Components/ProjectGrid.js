import React from 'react'
import './scss/projectGrid.css';
import 'aos/dist/aos.css';
import realestatebg from './photoSource/realestate.png'
import cryptobg from './photoSource/upCrypto.png'



export default function ProjectGrid() {
    let realEstat = 'https://staton-real-estate.netlify.app';
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
            <div onClick={()=>window.location.href=`${realEstat}`} className="project text-white m-2 rounded" style={{background: `url(${realestatebg})`}}></div>
            <div className="ms-2">
              <p className="display-4">Staton RealEstate</p>
              <p className="lead w-75">RealEstate site using an api to display property data and ReactMAPGL for map data. </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" >
            <div className="project bg-dark text-white m-2 rounded" style={{background: `url(${cryptobg})`, backgroundSize: '100% 500px', backgroundRepeat: 'no-repeat'}}></div>
            <div className="ms-2">
              <p className="display-4">CoinCanvas</p>
              <p className="lead">Website dedicated to tracking top crypto prices using coingecko api</p>
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
