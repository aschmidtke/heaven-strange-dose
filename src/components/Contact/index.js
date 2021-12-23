import React from "react";

function Contact() {
    return (
        <section className="text-center">
            <div className="container">
                <h2>Contact Me</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="email" className="form-control" id="contactName" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="contactEmail" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" rows="3" /> 
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;