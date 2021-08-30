import React, { useEffect } from 'react'
import landingImage from './photoSource/me.png';
import $ from 'jquery';
import '../App.css';
import './scss/landing.scss'
import Header from './Header';
import './scss/header.scss';
export default function Landing(props) {

    useEffect(()=>{
        window.addEventListener('load',()=>{
                $('.hello').addClass('fadeIn');
        })
    })

    return (
        <div className="section-wrapper">

                <Header />
                
                <section id="landingFull" className="container d-flex flex-row align-items-center flex-lg-row flex-sm-column">
                        <div className="">
                            <h1 className="hello w-100 text-sm-small text-md-small" style={{textAlign: 'left', marginRight: '5em'}} >Hello,<br/> 
                            I'm Matt.</h1>
                        
                            <h3 className="text-dark" style={{textAlign: 'left'}}>A <span style={{color: '#4792b7', fontWeight: 'bold'}}><span>F</span><span>r</span><span>o</span>nt-End</span> Web Engineer</h3>
                        </div>
                        <div className="w-25 d-flex align-items-center justify-content-center">
                           
                            <img className="image" style={{width: '840px', transform: 'translateY(-150px)'}} src={landingImage} />
                                
                        </div>
                </section>
        </div>
    )
}
