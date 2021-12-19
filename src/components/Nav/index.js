import React from 'react';

function Nav() {
    return (
        <header className="">
            <nav className="">
                <ul className="row">
                    <h2 className="col-md-4">
                        <a className="title" href="/">
                            Drew Schmidtke
                        </a>
                    </h2>
                        <li className="col-md-2 py-2">
                            <a href="#about">
                                About Me
                            </a>
                        </li>
                        <li className="col-md-2 py-2">
                            <a href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li className="col-md-2 py-2">
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                        <li className="col-md-2 py-2">
                            <a href="#resume">
                                Resume
                            </a>
                        </li>
                </ul>
            </nav>

        </header >
    );
}

export default Nav;