import React, { useEffect } from 'react'
import './scss/skill.scss';
import $ from 'jquery';
import 'aos/dist/aos.css';
import Aos from 'aos';


export default function Skills() {
    useEffect(()=>{
        Aos.init({
            duration: 1500
        })
    })
    return (

                    <div id="skills" style={{height: '50vh', fontFamily: 'quicksand, san-serif!important'}} class="vertical-centred d-flex justify-content-center align-items-center flex-lg-row flex-sm-column">
                                    <div class="boxed boxed-inner">
                                        <div class="boxed">
                                                <div class="container">
                                                        <div class="intro">
                                                            <h2 class="title mb-5 pb-5 display-6" style={{color: '#000',fontWeight: '800', fontFamily: 'Montserrat, sans-serif'}}> <span class="text-primary" >My</span> Specialization</h2>
                                                        <div class="row-specialization row" style={{textAlign: 'left'}}>


                                                        <div class="col-specialization col-md-6 col-lg-4" data-aos="fade-up">
                                                            <svg xmlns="http://www.w3.org/2000/svg"  width="75" height="75" fill="currentColor" class="bi bi-code-square mb-5" viewBox="0 0 16 16">
                                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                            <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                                                            </svg>
                                                            <h4 class="text-uppercase" style={{fontWeight: '800'}}>Coding</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fuga dicta voluptatum hic aut aspernatur magnam voluptates itaque atque quae laudantium, tempora at.</p>
                                                        </div>



                                                        <div class="col-specialization col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-phone mb-5" viewBox="0 0 16 16">
                                                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                                            </svg>
                                                            <h4 class="text-uppercase" style={{fontWeight: '800'}}>Mobile Design</h4>
                                                        <p>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through.</p>
                                                        </div>

                                                

                                                        <div class="col-specialization col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-box-seam mb-5" viewBox="0 0 16 16">
                                                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                                                            </svg>
                                                            <h4 class="text-uppercase" style={{fontWeight: '800'}}>API Integration</h4>
                                                            <p>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through.</p>
                                                        </div>
                                                        </div>
                                                    <div class="view-all mt-5 d-flex">
                                                    <button className="btn btn-custom" style={{background: '#4792b7'}}>
                                                    
                                                    Download CV
                                                    
                                                    </button>
                                                    </div>
                                                </div>
                                        </div>
                                </div>
                            </div>
                    </div>


/* <section class="features-area" style={{height: '50vh'}}>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 text-center">
					<div class="main-title">
						<h2>My Skillset </h2>
						<p>
							Is give may shall likeness made yielding spirit a itself togeth created 
							after sea <br /> is in beast beginning signs open god you're gathering ithe
						</p>
					</div>
				</div>
			</div>
			<div class="row feature_inner">
                            <div className="display-5">A Little About Me</div>
                                    <section className="skill-wrapper text-black w-100">         
                                                    <div className="d-flex flex-row align-content-center w-50">
                                                        <div className="d-flex my-3 logo">
                                                            <img style={{width: '40px', position: 'relative', zIndex: '5'}} src={reactSkill}/>
                                                                <p className="text-white label" style={{paddingLeft: '8em'}}>ReactJS</p>
                                                        </div>
                                                        <hr className="html" style={{animationDelay: '300ms'}} />
                                                    </div>
                                                    <div className="d-flex flex-row align-items-start w-50">
                                                    <p className="d-flex my-3 logo"><img style={{width: '40px', position: 'relative', zIndex: '5'}} src={nodeSkill}/><p className="text-white label" style={{paddingLeft: '8em'}}>NodeJS</p></p>
                                                        <hr className="html" style={{animationDelay: '300ms'}} />
                                                    </div>
                                                    <div className="d-flex flex-row align-items-start w-50">
                                                        <p className="d-flex align-content-center my-3 logo"><img style={{width: '40px'}} src={reactSkill}/></p>
                                                        <hr className="html" style={{animationDelay: '300ms'}} />
                                                    </div>
                                                    <div className="d-flex flex-row align-items-start w-50">
                                                        <p className="d-flex align-content-center my-3 logo"><img style={{width: '40px'}} src={reactSkill}/></p>
                                                        <hr className="html" style={{animationDelay: '300ms'}} />
                                                    </div>
                                                    <div className="d-flex flex-row align-items-start w-50">
                                                        <p className="d-flex align-content-center my-3 logo"><img style={{width: '40px'}} src={reactSkill}/></p>
                                                        <hr className="html" style={{animationDelay: '300ms'}} />
                                                    </div>
                                        
                                    </section>
			</div>
		</div>
	</section> */
    )
}