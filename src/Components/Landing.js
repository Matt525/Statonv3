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
                        
                            <h3 className="text-dark hello-sub" style={{textAlign: 'left'}}>A <span style={{color: '#4792b7', fontWeight: 'bold'}}><span className="letter">F</span><span className="letter">r</span><span className="letter">o</span><span className="letter">n</span><span className="letter">t</span>-<span className="letter">E</span><span className="letter">n</span><span className="letter">d</span></span> Web Engineer</h3>
                            <span><a exact path href="https://www.linkedin.com/in/matthew-staton-2064334a/"><i class="bi bi-linkedin fs-1 mx-3" style={{color:'#0a66c2'}}></i></a><a exact path href="https://www.facebook.com/matthew.staton.7"><i class="bi bi-facebook fs-1 text-primary mx-3"></i></a><a exact path href="https://www.instagram.com/matt_staton_/"><i class="bi bi-instagram fs-1 mx-3" style={{color: '#ff40ab'}}></i></a><a exact path href="https://twitter.com/Matt82616414"><i class="bi bi-twitter fs-1 mx-3" style={{color: '#2ba3e0'}}></i></a></span>


                        </div>
                        
                        <div className="w-25 d-flex align-items-center justify-content-center">
                        
                                
                        </div>
                </section>
        </div>
    )
}
