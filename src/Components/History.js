import React, { useEffect } from 'react'
import './scss/History.scss'
import 'aos/dist/aos.css';
import Aos from 'aos';

 
export default function History() {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true
        });
      });    
    return (
        <div class="experience pt-0">
            <div class="container">
                <header class="text-center">
                    <h2 className="my-5 pt-0" style={{fontSize: '40px', fontWeight: '700'}}>Working Experience</h2>
                </header>
                <div class="timeline">
                    <div class="timeline-item left wow slideInLeft"  style={{textAlign: 'left'}}>
                        <div class="timeline-text" data-aos="slide-right">
                            <div class="timeline-date">2045 - 2050</div>
                            <h2>Operations Manager</h2>
                            <h4>Soft Agency, San Francisco, CA</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right wow slideInRight"  style={{ textAlign: 'left'}}>
                        <div class="timeline-text" data-aos="slide-left">
                            <div class="timeline-date">2045 - 2050</div>
                            <h2>Web Developer</h2>
                            <h4>Soft Agency, San Francisco, CA</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item left wow slideInLeft"  style={{textAlign: 'left'}}>
                        <div class="timeline-text" data-aos="slide-right">
                            <div class="timeline-date">2045 - 2050</div>
                            <h2>Web Developer</h2>
                            <h4>Soft Agency, San Francisco, CA</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right wow slideInRight"  style={{textAlign: 'left'}}>
                        <div class="timeline-text" data-aos="slide-left">
                            <div class="timeline-date">2045 - 2050</div>
                            <h2>Web Developer</h2>
                            <h4>Soft Agency, San Francisco, CA</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item left wow slideInLeft"  style={{textAlign: 'left'}}>
                        <div class="timeline-text" data-aos="slide-right">
                            <div class="timeline-date">2045 - 2050</div>
                            <h2>Web Developer</h2>
                            <h4>Soft Agency, San Francisco, CA</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right wow slideInRight"  style={{textAlign: 'left'}}>
                        <div class="timeline-text" data-aos="slide-left">
                            <div class="timeline-date">2045 - 2050</div>
                            <h2>Web Developer</h2>
                            <h4>Soft Agency, San Francisco, CA</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
