import { useEffect } from 'react';
import React from 'react'
import $ from 'jquery';
import './scss/header.scss'
import landingImage from './photoSource/rounded.png';
import logo from './photoSource/M.png';
export default function Header() {


// Use to change navbar upon scroll. Possible full screen landing and upon scroll background fill. 
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            let scrolled = window.pageYOffset > 10;
            let about = window.pageYOffset > 700 && window.pageYOffset < 1700;
            let skills = window.pageYOffset > 1758 && window.pageYOffset < 2558;
            let projects = window.pageYOffset > 2558;
            let nav = $('#headerNav');
            let img = $('.headerImage');
            let matthew = $('.headerLogo');
            if (scrolled) {
                nav.addClass('show');
                img.show();
                matthew.hide();
                nav.addClass('scrolledNav');
            }else{
                nav.removeClass('show');
                img.hide(100);
                matthew.show(100);
                nav.removeClass('scrolledNav');
            }
            //Single Page animation breaks
            if(about){$('#navbarNav li:nth-child(1) > a').addClass('activeSection');}
            else{$('#navbarNav li:nth-child(1) > a').removeClass('activeSection')}
            if(skills){$('#navbarNav li:nth-child(2) > a').addClass('activeSection')}
            else{$('#navbarNav li:nth-child(2) > a').removeClass('activeSection')}
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
                                            <img onClick={()=>{window.location = "/"}} className="headerImage" style={{maxWidth: '50px', display: 'none'}} src={logo} />
                                            <h2 className="headerLogo">MATTHEW</h2>
                                            </div>
                                    <div class="collapse navbar-collapse container justify-content-end" id="navbarNav">
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                <a class="nav-link" aria-current="page" href="#">Intro</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link" href="#">Me</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link" href="#">Skills</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Projects</a>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
            </nav>
        </div>
    )
}
