import React from 'react'
import './scss/about.scss';
import nodeSkill from './photoSource/nodejs-icon.svg'
import reactSkill from './photoSource/react.svg'

export default function About() {
    return (
<section class="features-area" style={{height: '50vh'}}>
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
	</section>
        
    )
}


