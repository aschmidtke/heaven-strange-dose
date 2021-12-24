import React from "react";
import resume from "../../assets/resume.jpg"

function Resume() {
    return(
        <div className="text-center containerColor">
            <img src={resume} alt="resume photo" />
            <br></br>
            <a className="headerIcon" href={resume} download>
                <i class="bi bi-download" />
            </a>
        </div>
    );
}

export default Resume;