import React from 'react'
import './scss/about.scss';
import aboutImage from './photoSource/facebookPic.jpg'
import togetherImage from './photoSource/profile_pic.jpg'

export default function About() {
    return (
		<div className="bg-custom text-left d-flex align-items-center justify-content-center" style={{height: '70vh', textAlign: 'left', color: '#000'}}>
		<section class="about_area section_gap">

					<div class="row">
						<div class="col-lg-5 d-flex justify-content-end align-items-center">
							
								{/* <img className="about_img" src={aboutImage} /> */}
								<div class="bd-example about_img">
									<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
											<ol class="carousel-indicators">
											<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
											<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
											<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
											</ol>
										<div class="carousel-inner">
										<div class="carousel-item active">
											<img src={aboutImage} class="d-block w-100" alt="..." />
											<div class="carousel-caption d-none d-sm-block">
											<h5>New York</h5>
											<p>Atop of the rockefeller plasa in NYC.</p>
											</div>
										</div>
										<div class="carousel-item active">
											<img src={togetherImage} class="d-block w-100" alt="..." />
											<div class="carousel-caption d-none d-sm-block">
											<h5>Ohio</h5>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
											</div>
										</div>
										<div class="carousel-item active">
											<img src="..." class="d-block w-100" alt="..." />
											<div class="carousel-caption d-none d-sm-block">
											<h5>Third slide label</h5>
											<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
											</div>
										</div>
										</div>
								</div>
						</div>
							
					</div>

						<div class="offset-lg-1 col-lg-5 d-flex align-items-center">
							<div class="main_title text-left">
								<h2 style={{textAlign: 'left!important', fontWeight: '800', fontSize: '4em'}}>Let Me <br />
									Introduce
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
								<button type="button" class="btn btn-custom btn-dark btn-md border-0" style={{background: '#1abc9c'}}>Download CV</button>
							</div>
						</div>
					</div>

		</section>


</div>
    )
}


