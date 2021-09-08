import React from 'react'
import './scss/about.scss';
import aboutImage from './photoSource/leftImage.png'
import togetherImage from './photoSource/profile_pic.jpg'
import psicon from './photoSource/details-icon-photoshop.png'
import bsicon from './photoSource/details-icon-bootstrap.png'
import cssicon from './photoSource/details-icon-css.png'
import jsicon from './photoSource/details-icon-javascript.png'
import htmlicon from './photoSource/details-icon-html.png'
import reacticon from './photoSource/react.svg'
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function About() {
    return (
		<div className="bg-custom">
		<section class="about">

					<div class="row">
						<div class="img-wrapper col-lg-5 d-sm-none d-lg-block " data-aos-once="true"  data-aos="fade-right">
						
							
						</div>

						<div class="col-lg-5 d-flex align-items-center" data-aos-once="true"  data-aos="fade-left" >
							
							<div class="main_title my-5 mx-5" style={{textAlign: 'left'}}>
								<h2 className="mb-4" style={{fontWeight: '400', fontSize: '3em',}}>Let Me
									Introduce
									myself</h2>
								<p className="lead">I am a 29 year old <span className="blockquote">self built</span> front end engineer with a power drive and self motivation to bring the customers ideas to life. 
									With my positive, forward thinking mindset and attention to every detail, I only strive to deliver what can be my best performance 
									with every project that I do. With that said, I am always learning and welcome the opportunity to work with you and continue to grow
									my real work knowledge so that I can make the user & customer experience better with each new project. 
								</p>
								<p className="h6 my-4" style={{fontWeight: 'bold'}}>MY DESIGN TOOLS</p>
								<p>
									Being that my highest skills lie in pure development and building, my design tools aren't as broad as my development tools
									Currently, I use design tools such as Figma, Photoshop and Canva to bring ideas to life. 
								</p>
								<p className="h6 my-4" style={{fontWeight: 'bold'}}>DEVELOPMENT TOOLS</p>
								<p>
									The development tools I use daily are Nodejs, ReactJS, Bootstrap, ExpressJS, Material-UI, SASS&CSS, HTML as well as many other commonly used
									developer tools. Please feel free to download my CV below for a list of all of the tools I use and have used. 
								</p>
								{/* <button type="button" class="btn btn-custom btn-dark btn-md border-0" style={{background: '#1abc9c'}}>Download CV</button> */}
								<div class="icons-container">
                                <img className="icon" src={htmlicon} alt="alternative"/>
                                <img className="icon" src={cssicon} alt="alternative"/>
                                <img className="icon" src={jsicon} alt="alternative"/>
                                <img className="icon" src={bsicon} alt="alternative"/>
                                <img className="icon" src={psicon} alt="alternative"/>
                                <img className="icon" src={reacticon} alt="alternative"/>
                        
                            </div>
							</div>
						</div>
					</div>

		</section>


</div>
    )
}


