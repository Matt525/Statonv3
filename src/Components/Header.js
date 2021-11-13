import { useEffect } from 'react';
import React from 'react'
import $ from 'jquery';
import './scss/header.scss'
import logo from './photoSource/M.png';
export default function Header() {

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            let scrolled = window.pageYOffset > 10;
            let skills = window.pageYOffset > 500 && window.pageYOffset < 1700;
            let me = window.pageYOffset > 1700 && window.pageYOffset < 3200;
            let projects = window.pageYOffset > 3200 && window.pageYOffset < 4200;
            let nav = $('#headerNav');
            let img = $('.headerImage');
            let matthew = $('.headerLogo');
            if (scrolled) {
                nav.addClass('show');
                img.show();
                matthew.hide();
                nav.addClass('scrolledNav');
                $('#navbarNav > ul > li > a').addClass('colored');
            }else{
                nav.removeClass('show');
                img.hide(100);
                matthew.show(100);
                nav.removeClass('scrolledNav');
                $('#navbarNav > ul > li > a').removeClass('colored');
            }
            //Single Page animation breaks
            if(skills){$('#navbarNav li:nth-child(1) > a').addClass('activeSection');}
            else{$('#navbarNav li:nth-child(1) > a').removeClass('activeSection')}
            if(me){$('#navbarNav li:nth-child(2) > a').addClass('activeSection')}
            else{$('#navbarNav li:nth-child(2) > a').removeClass('activeSection')}
            if(projects){$('#navbarNav li:nth-child(3) > a').addClass('activeSection')}
            else{$('#navbarNav li:nth-child(3) > a').removeClass('activeSection')}
        })
            
        });

    return (
        <div>
             <nav id="headerNav" class="navbar navbar-light navbar-expand-lg header">
                                <div class="container">
                                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <div>
                                            <img onClick={()=>{window.location = "/"}} className="headerImage" style={{maxWidth: '50px', display: 'none'}} src={logo} atl="Header Logo Here" />
                                            <h2 className="headerLogo"><span style={{color: '#4792b7', fontSize: '45px'}}>M</span>ATTHEW</h2>
                                            </div>
                                    <div class="collapse navbar-collapse container justify-content-end" id="navbarNav">
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                <a class="nav-link text-dark text-bold fs-4" aria-current="page" href="#">skills</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link text-dark px-3 fs-4" href="#">me</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link text-dark fs-4" href="#">projects</a>
                                                </li>
                                                <li class="nav-item">
                                                <a class="nav-link text-dark fs-4" href="#" tabindex="-1" aria-disabled="true">hire</a>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
            </nav>
        </div>
    )
}
