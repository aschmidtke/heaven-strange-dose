import React from "react";

function Contact() {
    return (
        <section className="text-center">
            <div className="container">
                <h2>Contact Me</h2>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea rows="5" />
                    </div>
                    <button type="submit">Send!</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;