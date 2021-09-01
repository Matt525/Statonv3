import React from 'react'
import './scss/about.scss';
import aboutImage from './photoSource/profile_pic.jpg'
import togetherImage from './photoSource/profile_pic.jpg'

export default function About() {
    return (
		<div className="bg-custom">
		<section class="about d-flex justify-content-center align-items-center mx-5">

					<div class="row">
						<div class="col-lg-5 d-flex justify-content-center align-items-center">
							
								{/* <img className="about_img d-sm-none h-50" src={aboutImage} /> */}
								
							
						</div>

						<div class="offset-lg-1 col-lg-5 d-flex align-items-center">
							
							<div class="main_title" style={{textAlign: 'left'}}>
								<h2 className="d-sm-" style={{fontWeight: '400', fontSize: '3em'}}>Let Me <br />
									Introduce
									myself</h2>
								<p>I am a 29 year old aspiring front end engineer with a power drive and self motivation to bring the customers ideas to life. 
									With my positive, forward thinking mindset and attention to every detail, I only strive to deliver what can be my best performance 
									with every project that I do. With that said, I am always learning and welcome the opportunity to work with you and continue to grow
									my real work knowledge so that I can make the user & customer experience better with each new project. 
								</p>
								<p className="h5 my-4" style={{fontWeight: 'bold'}}>MY DESIGN TOOLS</p>
								<p>
									Being that my highest skills lye in pure development and building, my design tools aren't as broad as my development tools
									Currently, I use design tools such as Figma, Photoshop and Canva to bring ideas to life. 
								</p>
								<p className="h5 my-4" style={{fontWeight: 'bold'}}>DEVELOPMENT TOOLS</p>
								<p>
									The development tools I use daily are Nodejs, ReactJS, Bootstrap, ExpressJS, Material-UI, SASS&CSS, HTML as well as many other commonly used
									developer tools. Please feel free to download my CV below for a list of all of the tools I use and have used. 
								</p>
								<button type="button" class="btn btn-custom btn-dark btn-md border-0" style={{background: '#1abc9c'}}>Download CV</button>
							</div>
						</div>
					</div>

		</section>


</div>
    )
}


