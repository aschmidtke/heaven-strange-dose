import React from "react";
import resume from "../../assets/resume.jpg"

function Resume() {
    return (
        <div className="text-center containerColor">
            <img src={resume} alt="resume" className="resumeImage shading"/>
            <br></br>
            <a className="headerIcon" href={resume} download>
                <i className="bi bi-download" />
            </a>
        </div>
    );
}

export default Resume;