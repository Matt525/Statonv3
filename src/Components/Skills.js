import React, { useEffect } from 'react'
import './scss/skill.scss';
import $ from 'jquery';
import aboutImage from './photoSource/aboutPic.png'

export default function Skills() {
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            let about = window.pageYOffset > 500 && window.pageYOffset < 1700;
            let sk = $('hr');
            if(about){sk.addClass('grow');}
        })
    })
    return (
        <div className="bg-custom text-left text-light" style={{height: '50vh', marginTop: '10em', textAlign: 'left'}}>
                        <section class="about_area section_gap">
                                <div class="container">
                                    <div class="row justify-content-start align-items-center">
                                        <div class="col-lg-5">
                                            <div class="about_img">
                                                <img class="" src={aboutImage} alt=""/>
                                            </div>
                                        </div>

                                        <div class="offset-lg-1 col-lg-5">
                                            <div class="main_title text-left">
                                                <h2 style={{textAlign: 'left!important', fontWeight: '800'}}>Let Me <br />
                                                    Introduce <br />
                                                    myself</h2>
                                                <p>
                                                    Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven 
                                                    midst their. Beast creepeth. Fish days.
                                                </p>
                                                <p>
                                                    Is give may shall likeness made yielding spirit a itself together created after sea 
                                                    is in beast beginning signs open god you're gathering whose gathered cattle let. 
                                                    Creature whales fruit unto meat the life beginning all in under give two.
                                                </p>
                                                <button type="button" class="btn btn-custom btn-dark btn-lg border-0" style={{background: '#1abc9c'}}>Download CV</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>


        </div>
    )
}
