import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  navbar-style">
            <div className="container">

                <a class="navbar-brand" href="#">Meltal Parts World</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;