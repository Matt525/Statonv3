import React, { useEffect } from 'react'
import landingImage from './photoSource/rounded.png';
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

                {/* Imported Header to page */}
                <Header />
                
                <section id="landingFull" className="container slanted slanted-bottom slant-to-left">

                    <div style={{marginBottom: '20%'}}>
                    
                        {/* <img className="image" style={{width: '10%', minWidth: '200px'}} src={landingImage} /> */}
                
                        <h1 className="hello" >Hello, I'm Matt.</h1>
                    
                        <h3 style={{color: '#eee!important'}}>A <span style={{color: '#1abc9c'}}><span>F</span><span>r</span><span>o</span>nt-End</span> Web Engineer</h3>
                    </div>
                </section>
        </div>
    )
}
