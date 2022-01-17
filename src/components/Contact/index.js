import React from "react";

function Contact() {
    return (
        <section className="text-center">
            <div className="container containerColor">
                <h3>Contact Me</h3>
                <div className="d-flex flex-column">
                    <span className="contactIcon">
                        <a href="mailto: amschmidtke@gmail.com">
                            Email
                        </a>
                    </span>
                    <span className="contactIcon" >
                        <a href="https://www.linkedin.com/in/drew-schmidtke/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin" role="img" aria-label="LinkedIn"></i>
                        </a>
                    </span>
                    <span className="contactIcon">
                        <a href="https://github.com/aschmidtke" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github" role="img" aria-label="GitHub"></i>
                        </a>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Contact;