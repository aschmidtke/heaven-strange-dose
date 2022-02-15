import React from 'react';
import headShot from '../../assets/headshot2.png';

function About() {
    return (
        <section className="row containerColor">
            <div className="col-md-4">
                <img src={headShot} className="img-fluid" alt="headshot" />
            </div>
            <div className="aboutText px-2 col-md-8 pageContent">
            <p>
            Full Stack Web Developer with 10 years of hospitality management experience. Recently earned a Certificate in Full-Stack Web Development from Butler University. Creative problem solver, great team player and excellent multitasker. Avid cook and musician. Enjoys creating web applications with a user-friendly design, layout and functionality. Excited to leverage skills as part of a fast-paced, quality-driven team to build better experiences on the web.
            </p>
            <br></br>
            <p>
            Technical Skills: HTML, CSS, Javascript, Node.js, Express, MongoDB, React.js
            </p>
            </div>
        </section>
    );
}

export default About;