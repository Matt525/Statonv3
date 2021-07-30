import React from 'react'
import landingImage from './photoSource/rounded.png';
import '../App.css';
import './scss/landing.scss'
import { useEffect } from 'react';
export default function Landing() {

    useEffect(()=>{
        window.addEventListener(()=>{
                
        })
    })
    return (
        <>
        <div id="landingImage" className="container slanted slanted-bottom slant-to-left">
            
                <img className="image" style={{width: '10%', minWidth: '200px'}} src={landingImage} />
        
                <h1>Hello, I'm Matt</h1>
            
                <h3>A <span style={{color: '#1abc9c'}}>Front-End</span> Web Engineer</h3>
            
        
            
        </div>
                {/* <div id="skewId" className="skewedDiv"/> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#1abc9c" fill-opacity="1" d="M0,96L1440,288L1440,0L0,0Z"></path>
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1abc9c" fill-opacity="1" d="M0,256L360,224L720,96L1080,256L1440,256L1440,0L1080,0L720,0L360,0L0,0Z"></path></svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1abc9c" fill-opacity="1" d="M0,64L720,96L1440,32L1440,0L720,0L0,0Z"></path></svg> */}
                <div className="landing-bottom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#282c34" fill-opacity="1" d="M0,0L720,96L1440,160L1440,0L720,0L0,0Z"></path></svg></div>
        </>
    )
}
