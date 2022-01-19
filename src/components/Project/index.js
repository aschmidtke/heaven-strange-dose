import React from 'react';
import photo0 from '../../assets/small/0.jpg';
import photo1 from '../../assets/small/1.jpg';
import photo2 from '../../assets/small/2.jpg';
import photo3 from '../../assets/small/3.jpg';
import photo4 from '../../assets/small/4.jpg';
import photo5 from '../../assets/small/5.jpg';


function Project() {
    return (
        <div className="row text-center">
            {/* project cards */}

            {/* project 1 */}
            <div className="container col-md-4 shading">
                <div className="card py-2 my-2 projectBorder">
                    <h3 className="card-title">This Week's Distractions</h3>
                    <div className="card-body">
                        <p className="pageContent">One-stop event planner using Materialize and Ticketmaster, OpenWeather and Google APIs</p>
                        <a href="https://tcyang1006.github.io/Project-1/" target="_blank" rel="noopener noreferrer">
                            <img src={photo0} className="img-thumbnail shading" alt="This Week's Distractions homepage" />
                        </a>
                    </div>
                    <div className="card-footer bg-white">
                        <a href="https://github.com/TCYang1006/Project-1" target="_blank" rel="noopener noreferrer">
                            <h5 className="pageContent">GitHub <i className="bi bi-github"></i></h5>
                        </a>
                    </div>
                </div>
            </div>

            {/* project 2 */}
            <div className="container col-md-4 shading">
                <div className="card py-2 my-2 projectBorder">
                    <h3 className="card-title">Receipe Rendezvous</h3>
                    <div className="card-body">
                        <p className="pageContent">A blog-style recipe sharing site using Node, Express and MySQL, styled using Tailwind CSS</p>
                        <a href="https://sleepy-beach-41817.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={photo1} className="img-thumbnail shading" alt="Recipe Rendezvous homepage" />
                        </a>
                    </div>
                    <div className="card-footer bg-white">
                        <a href="https://github.com/aschmidtke/butler-project-two.git" target="_blank" rel="noopener noreferrer">
                            <h5 className="pageContent">GitHub <i className="bi bi-github"></i></h5>
                        </a>
                    </div>
                </div>
            </div>

            {/* project 3 */}
            <div className="container col-md-4 shading">
                <div className="card py-2 my-2 projectBorder">
                    <h3 className="card-title">Fresh Tech Blog</h3>
                    <div className="card-body">
                        <p className="pageContent">A blog-style site using Node, Express, MySQL, and Handlebars with Tailwinds CSS</p>
                        <a href="https://mighty-garden-56683.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={photo2} className="img-thumbnail shading" alt="Fresh Tech Blog homepage" />
                        </a>
                    </div>
                    <div className="card-footer bg-white">
                        <a href="https://github.com/aschmidtke/chicken-jewel-invisible.git" target="_blank" rel="noopener noreferrer">
                            <h5 className="pageContent">GitHub <i className="bi bi-github"></i></h5>
                        </a>
                    </div>
                </div>
            </div>

            {/* project 4 */}
            <div className="container col-md-4 shading">
                <div className="card py-2 my-2 projectBorder">
                    <h3 className="card-title">Social Network API</h3>
                    <div className="card-body">
                        <p className="pageContent">A back-end social network setup using MongoDB and Mongoose showcasing API routes</p>
                        <a href="https://drive.google.com/file/d/1IMSeb_t7-jEKNf9o1KyHqr0pLWGt9Q5n/view" target="_blank" rel="noopener noreferrer">
                            <img src={photo3} className="img-thumbnail shading" alt="Social Network API" />
                        </a>
                    </div>
                    <div className="card-footer bg-white">
                        <a href="https://github.com/aschmidtke/hestitate-multiply-pin" target="_blank" rel="noopener noreferrer">
                            <h5 className="pageContent">GitHub <i className="bi bi-github"></i></h5>
                        </a>
                    </div>
                </div>
            </div>

            {/* project 5 */}
            <div className="container col-md-4 shading">
                <div className="card py-2 my-2 projectBorder">
                    <h3 className="card-title">Note Taker</h3>
                    <div className="card-body">
                        <p className="pageContent">An Express-based note app using HTML, CSS and JavaScript and deployed using Heroku</p>
                        <a href="https://desolate-brook-52812.herokuapp.com" target="_blank" rel="noopener noreferrer">
                            <img src={photo4} className="img-thumbnail shading" alt="Note Taker homepage" />
                        </a>
                    </div>
                    <div className="card-footer bg-white">
                        <a href="https://github.com/aschmidtke/express-note-taker" target="_blank" rel="noopener noreferrer">
                            <h5 className="pageContent">GitHub <i className="bi bi-github"></i></h5>
                        </a>
                    </div>
                </div>
            </div>

            {/* project 6 */}
            <div className="container col-md-4 shading">
                <div className="card py-2 my-2 projectBorder">
                    <h3 className="card-title">Work Day Scheduler</h3>
                    <div className="card-body">
                        <p className="pageContent">A simple calendar application using JavaScript, Moment.js, jQuery, and Bootstrap styling</p>
                        <a href="https://aschmidtke.github.io/workday-challenge-five/" target="_blank" rel="noopener noreferrer">
                            <img src={photo5} className="img-thumbnail shading" alt="Work Day Scheduler homepage" />
                        </a>
                    </div>
                    <div className="card-footer bg-white">
                        <a href="https://github.com/aschmidtke/workday-challenge-five.git" target="_blank" rel="noopener noreferrer">
                            <h5 className="pageContent">GitHub <i className="bi bi-github"></i></h5>
                        </a>
                    </div>
                </div>
            </div>

        </div >
    )
}




export default Project;