import React from 'react'
import './scss/effects.scss'

export default function Cards() {
    return (
    <body style={{background: '#fff'}}>
        <div className="container" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '10em'}}>
            <div style={{marginTop: '0'}} class=" col-lg-4 col-sm-6 card-animation "><a class="d-block nav-heading text-center" href="demo-business-consulting.html">
                <div class="card border-0 shadow-lg mb-4"><img class="card-img" src="https://around.createx.studio/img/demo/presentation/demos/business-consulting.jpg" alt="Business Consulting"/></div></a>
            </div>
            
            <div style={{margin: '20em 0 0 10em', borderRadius: '10px'}} class="col-lg-4 col-sm-6 card-animation "><a class="d-block nav-heading text-center" href="demo-business-consulting.html">
                <div class="card border-0 shadow-lg mb-4"><img class="card-img" src="https://around.createx.studio/img/demo/presentation/demos/business-consulting.jpg" alt="Business Consulting"/></div></a>
            </div>
            
            <div style={{margin: '2em 50% 0 0'}}  class=" col-lg-4 col-sm-6 card-animation"><a class="d-block nav-heading text-center" href="demo-business-consulting.html">
                <div class="card border-0 shadow-lg mb-4"><img class="card-img" src="https://around.createx.studio/img/demo/presentation/demos/business-consulting.jpg" alt="Business Consulting"/></div></a>
            </div>
            
            <div style={{margin: '2em 0 0 50%'}} class="col-lg-4 col-sm-6 card-animation"><a class="d-block nav-heading text-center" href="demo-business-consulting.html">
                <div class="card border-0 shadow-lg mb-4"><img class="card-img" src="https://around.createx.studio/img/demo/presentation/demos/business-consulting.jpg" alt="Business Consulting"/></div></a>
            </div>

            <div style={{margin: '2em 50% 0 0'}} class=" col-lg-4 col-sm-6 card-animation "><a class="d-block nav-heading text-center" href="demo-business-consulting.html">
                <div class="card border-0 shadow-lg mb-4"><img class="card-img" src="https://around.createx.studio/img/demo/presentation/demos/business-consulting.jpg" alt="Business Consulting"/></div></a>
            </div>
            
            
        </div>
    </body>
    )
}
