import React from 'react'
import './scss/projects.scss';

export default function Projects() {
    return (
            <div class=" main-wrapper container-fluid my-5">
                        <header class="text-center mx-5">
                            <h2 style={{fontSize: '50px', fontWeight: '700'}}>My Projects</h2>
                            <p>Ipsum officia consequat irure ipsum enim velit dolore veniam commodo. Tempor amet qui fugiat sint Lorem tempor. Amet aliquip laboris nostrud magna occaecat enim exercitation.</p>
                        </header>

                        <section className="d-flex flex-lg-row flex-sm-column justify-content-center align-items-center my-5">
                                <div class="p-item m-3">
                                        <div class="view overlay rounded z-depth-1">
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

                                <div class="p-item m-3">
                                        <div class="view overlay rounded z-depth-1">
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

                                <div class="p-item m-3">
                                        <div class="view overlay rounded z-depth-1">
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
    )
}
