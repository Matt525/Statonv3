import { useEffect } from 'react';
import React from 'react'
import $ from 'jquery';
import './scss/header.scss'
import landingImage from './photoSource/rounded.png';
export default function Header() {


// Use to change navbar upon scroll. Possible full screen landing and upon scroll background fill. 
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            let scrolled = window.pageYOffset > 10;
            let about = window.pageYOffset > 1256;
            let skills = window.pageYOffset > 2658;
            let projects = window.pageYOffset > 3987;
            let nav = $('#headerNav');
            let img = $('.headerImage');
            let matthew = $('.headerLogo');
            if (scrolled) {
                nav.addClass('show');
                img.show();
                matthew.hide();
            }else{
                nav.removeClass('show');
                img.hide();
                matthew.show();
            }
        })
            
        });

    return (
        <div>
             <nav id="headerNav" class="navbar navbar-expand-lg navbar-dark header">
                                <div class="container-fluid" style={{marginRight: '35em',}}>
                                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <div style={{marginLeft: '35em', overflowWrap: 'none', textOverflow: 'none',}}>
                                            <img onClick={()=>{window.location = "/"}} className="headerImage" style={{maxWidth: '50px', display: 'none'}} src={landingImage} />
                                            <h2 className="headerLogo">MATTHEW</h2>
                                            </div>
                                    <div class="collapse navbar-collapse container justify-content-end" id="navbarNav">
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#">Intro</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link active" href="#">Me</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link active" href="#">Skills</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Projects</a>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
            </nav>
        </div>
    )
}
