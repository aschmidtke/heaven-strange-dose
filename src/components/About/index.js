import React from 'react';
import headShot from '../../assets/headshot2.png';

function About() {
    return (
        <section className="row containerColor">
            <div className="col-md-4">
                <img src={headShot} className="img-fluid" alt="headshot" />
            </div>
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