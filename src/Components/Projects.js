import React from 'react'
import './scss/projects.scss';
import 'aos/dist/aos.css';

export default function Projects() {
        
    return (
        <div className="main-wrapper">
            <div class="container">
                        <header class="text-center mx-5 pt-5">
                            <h2 className="header-text">My Projects</h2>
                        </header>

                        <section className="d-flex flex-lg-row flex-column justify-content-center align-items-center">
                                <div class=" m-3" data-aos="fade-up">
                                        <div class="p-item view overlay rounded z-depth-1">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Others/images/58.jpg" class="img-fluid" alt="Sample project image"/>
                                                <div class="card-body pb-0">
                                                <h4 class="font-weight-bold my-3 display-6">Real Estate Website</h4>
                                                <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                                    eveniet ut et voluptates repudiandae.
                                                </p>
                                                <a class="btn btn-indigo btn-sm waves-effect waves-light"><i class="fas fa-clone left"></i> View project</a>
                                                </div>
                                        </div>
                                </div>

                                <div class="m-3" data-aos="fade-up" data-aos-delay="300">
                                        <div class=" p-item view overlay rounded z-depth-1">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Others/images/58.jpg" class="img-fluid" alt="Sample project image"/>
                                            <div class="card-body pb-0">
                                                <h4 class="font-weight-bold my-3 display-6">Title of the news article</h4>
                                                <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                                    eveniet ut et voluptates repudiandae.
                                                </p>
                                                <a class="btn btn-indigo btn-sm waves-effect waves-light"><i class="fas fa-clone left"></i> View project</a>
                                            </div>
                                                                                </div>
                                </div>

                                <div class="m-3" data-aos="fade-up" data-aos-delay="600">
                                        <div class="p-item view overlay rounded z-depth-1">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Others/images/58.jpg" class="img-fluid" alt="Sample project image"/>
                                                <div class="card-body pb-0">
                                                <h4 class="font-weight-bold my-3 display-6">Title of the news article</h4>
                                                <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                                                    eveniet ut et voluptates repudiandae.
                                                </p>
                                                <a class="btn btn-indigo btn-sm waves-effect waves-light"><i class="fas fa-clone left"></i> View project</a>
                                                </div>
                                        </div>
                                </div>


                        </section>
            </div>
        </div>
    )
}
