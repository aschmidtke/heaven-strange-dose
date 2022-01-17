import React, { useState } from 'react';


const Nav = props => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
            <h2>
                <a className="navbar-item" href="/">
                    <span className="headerIcon">
                        <i className="bi bi-slash"></i>
                    </span>
                    Drew Schmidtke
                </a>
            </h2>
            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span>
                    <i className="bi bi-slash headerIcon"></i>
                </span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
            <ul className='navbar-nav'>
                     {tabs.map(tab => (
                        <li className="navbar-item active" key={tab}>
                            <h4>
                                <span className="headerIcon">
                                    <i className="bi bi-slash"></i>
                                </span>
                                <a
                                    href={'#' + tab.toLowerCase()}
                                    onClick={() => props.handlePageChange(tab)}
                                >
                                    {tab}
                                </a>
                            </h4>
                        </li>
                    ))}


                </ul>
            </div>
        </nav>
    );
}

export default Nav;