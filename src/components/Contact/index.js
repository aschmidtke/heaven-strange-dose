import React from "react";

function Contact() {
    return (
        <section className="text-center">
            <div className="container containerColor">
                <h2 className="fw-bold fs-1">Contact Me</h2>
                <div className="d-flex flex-column">

                    <h3 className="contactIcon">
                        <a href="mailto: amschmidtke@gmail.com">
                            Email
                        </a>
                    </h3>

                    <h1 className="contactIcon" >
                        <a href="https://www.linkedin.com/in/drew-schmidtke/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin" role="img" aria-label="LinkedIn"></i>
                        </a>
                    </h1>

                    <h1 className="contactIcon">
                        <a href="https://github.com/aschmidtke" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github" role="img" aria-label="GitHub"></i>
                        </a>
                    </h1>
                    
                </div>
            </div>
        </section>
    );
}

export default Contact;