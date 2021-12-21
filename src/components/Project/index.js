import React from 'react';
import photo0 from '../../assets/small/0.jpg';
import photo1 from '../../assets/small/1.jpg';
import photo2 from '../../assets/small/2.jpg';
import photo3 from '../../assets/small/3.jpg';
import photo4 from '../../assets/small/4.jpg';
import photo5 from '../../assets/small/5.jpg';


function Project() {
    return (
        <ul className="row">
            <li className="col-md-4">
                <h3>This Week's Distractions</h3>
                <p>One-stop event planner using Materialize and Ticketmaster, OpenWeather and Google APIs</p>
                <img src={photo0} />
            </li>
            <li className="col-md-4">
                <h3>Receipe Rendezvous</h3>
                <p>A blog-style recipe sharing site using Node, Express and MySQL, styled using Tailwind CSS</p>
                <img src={photo1} />
            </li>
            <li className="col-md-4">
                <h3>Fresh Tech Blog</h3>
                <p>A blog-style site using Node, Express, and MySQL</p>
                <img src={photo2} />
            </li>
            <li className="col-md-4">
                <h3>Social Network API</h3>
                <p>A back-end social network API setup using MongoDB</p>
                <img src={photo3} />
            </li>
            <li className="col-md-4">
                <h3>Note Taker</h3>
                <p>An Express-based note app deployed using Heroku</p>
                <img src={photo4} />
            </li>
            <li className="col-md-4">
                <h3>Work Day Scheduler</h3>
                <p>A simple calendar application using Moment.js and jQuery</p>
                <img src={photo5} />
            </li>
        </ul>
    )
}




export default Project;