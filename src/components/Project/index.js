import React from 'react';
import photo0 from '../../assets/small/0.jpg';
import photo1 from '../../assets/small/1.jpg';
import photo2 from '../../assets/small/2.jpg';
import photo3 from '../../assets/small/3.jpg';
import photo4 from '../../assets/small/4.jpg';
import photo5 from '../../assets/small/5.jpg';


function Project() {
    return (
        <ul className="row text-center containerProject">
            <li className="col-md-4 py-2 my-2">
                <h3>This Week's Distractions</h3>
                <p className="pageContent">One-stop event planner using Materialize and Ticketmaster, OpenWeather and Google APIs</p>
                <a href="https://tcyang1006.github.io/Project-1/" target="_blank">
                    <img src={photo0} className="img-thumbnail projectImg" alt="This Week's Distractions homepage" />
                </a>
                <a href="https://github.com/TCYang1006/Project-1" target="_blank">
                    <h5 className="pageContent">GitHub <i class="bi bi-github"></i></h5>
                </a>
            </li>
            <li className="col-md-4 py-2 my-2">
                <h3>Receipe Rendezvous</h3>
                <p className="pageContent">A blog-style recipe sharing site using Node, Express and MySQL, styled using Tailwind CSS</p>
                <a href="https://sleepy-beach-41817.herokuapp.com/" target="_blank">
                    <img src={photo1} className="img-thumbnail projectImg" alt="Recipe Rendezvous homepage" />
                </a>
                <a href="https://github.com/aschmidtke/butler-project-two.git" target="_blank">
                    <h5 className="pageContent">GitHub <i class="bi bi-github"></i></h5>
                </a>
            </li>
            <li className="col-md-4 py-2 my-2">
                <h3>Fresh Tech Blog</h3>
                <p className="pageContent">A blog-style site using Node, Express, and MySQL</p>
                <br></br>
                <a href="https://mighty-garden-56683.herokuapp.com/" target="_blank">
                    <img src={photo2} className="img-thumbnail projectImg" alt="Fresh Tech Blog homepage" />
                </a>
                <a href="https://github.com/aschmidtke/chicken-jewel-invisible.git" target="_blank">
                    <h5 className="pageContent">GitHub <i class="bi bi-github"></i></h5>
                </a>
            </li>
            <li className="col-md-4 py-2 my-2">
                <h3>Social Network API</h3>
                <p className="pageContent">A back-end social network API setup using MongoDB</p>
                <br></br>
                <a href="https://drive.google.com/file/d/1IMSeb_t7-jEKNf9o1KyHqr0pLWGt9Q5n/view" target="_blank">
                    <img src={photo3} className="img-thumbnail projectImg" alt="Social Network API" />
                </a>
                <a href="https://github.com/aschmidtke/hestitate-multiply-pin" target="_blank">
                    <h5 className="pageContent">GitHub <i class="bi bi-github"></i></h5>
                </a>
            </li>
            <li className="col-md-4 py-2 my-2">
                <h3>Note Taker</h3>
                <p className="pageContent">An Express-based note app deployed using Heroku</p>
                <br></br>
                <a href="https://desolate-brook-52812.herokuapp.com" target="_blank">
                    <img src={photo4} className="img-thumbnail projectImg" alt="Note Taker homepage" />
                </a>
                <a href="https://github.com/aschmidtke/express-note-taker" target="_blank">
                    <h5 className="pageContent">GitHub <i class="bi bi-github"></i></h5>
                </a>
            </li>
            <li className="col-md-4 py-2 my-2">
                <h3>Work Day Scheduler</h3>
                <p className="pageContent">A simple calendar application using Moment.js and jQuery</p>
                <br></br>
                <a href="https://aschmidtke.github.io/workday-challenge-five/" target="_blank">
                    <img src={photo5} className="img-thumbnail projectImg" alt="Work Day Scheduler homepage" />
                </a>
                <a href="https://github.com/aschmidtke/workday-challenge-five.git" target="_blank">
                    <h5 className="pageContent">GitHub <i class="bi bi-github"></i></h5>
                </a>
            </li>
        </ul>
    )
}




export default Project;