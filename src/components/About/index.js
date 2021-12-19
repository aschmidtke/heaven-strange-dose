import React from 'react';
import headShot from '../../assets/headshot.jpg';

function About() {
    return (
        <section className='row'>
            <img src={headShot} className="col-md-4" alt="headshot" />
            <a className="aboutText px-2 col-md-8">I'm Drew Schmidtke, and I'm a full stack web developer. I'm finishing up my training at Butler University's Executive Education Coding Boot Camp in January 2022. Before this, I spent 18 years in the hospitality industry. I live in Indianpolis with my wife, Steph, and our cat, Pickle. In addition to coding, I am also an avid cook and musician. </a>
        </section>
    );
}

export default About;