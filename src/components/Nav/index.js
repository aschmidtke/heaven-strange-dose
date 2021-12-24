import React from 'react';

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
            <ul className="row">
                <h2 className="col-md-4">
                    <a className="py-2" href="/">
                        <span className="headerIcon">
                            <i class="bi bi-slash"></i>
                        </span>
                        Drew Schmidtke
                    </a>
                </h2>
                {tabs.map(tab => (
                    <li className="col-md-2 py-2" key={tab}>
                        <h4>
                            <span className="headerIcon">
                                <i class="bi bi-slash"></i>
                            </span>
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                            // className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}
                            >
                                {tab}
                            </a>
                        </h4>
                    </li>
                ))}

            </ul>
    );
}

export default Nav;