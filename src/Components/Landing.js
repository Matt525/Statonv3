import '../App.css';
import './scss/landing.scss'
import Header from './Header';
import './scss/header.scss';
export default function Landing(props) {


    return (
        <div id="section-wrapper" data-aos="fade-in">

                <Header />
                
                <section id="landingFull" className="container d-flex flex-row align-items-center flex-lg-row flex-sm-column fade-in">
                        <div className="text-wrapper text-focus-in">
                            <h1 className="hello" style={{textAlign: 'left', marginRight: '6em'}} >Hello,<br/> 
                            I'm Matt.</h1>
                        
                            <h3 className="text-dark hello-sub" style={{textAlign: 'left'}}>A <span style={{color: '#4792b7', fontWeight: 'bold'}}><span>F</span><span>r</span><span>o</span>nt-End</span> Web Engineer</h3>
                        </div>
                        <div className="w-25 d-flex align-items-center justify-content-center">
                        
                                
                        </div>
                </section>
        </div>
    )
}
