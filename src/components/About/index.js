import React from 'react';
import headShot from '../../assets/headshot.jpg';

function About() {
    return (
        <section className='row containerColor'>
            <img src={headShot} className="col-md-4" alt="headshot" />
            <div className="aboutText px-2 col-md-8 pageContent">
                <p className="fw-bold fs-1 float-left">
                    Hi,
                </p>
                I'm Drew Schmidtke, and I'm a full stack web developer. I'm finishing up my training at Butler University's Executive Education Coding Boot Camp in January 2022. Before this, I spent 18 years in the hospitality industry. I live in Indianapolis with my wife, Steph, and our cat, Pickle. In addition to coding, I am also an avid cook and musician.
            </div>
        </section>
    );
}

export default About;