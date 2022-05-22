import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  navbar-style ">
            <div className="container">

                <Link to='/' className="navbar-brand fs-2">Metal Parts World</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
                            {/* offcanvas...start */}
                            {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                <li><Link className="dropdown-item" to="/">Another action</Link></li>

                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            </ul> */}
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">HOME</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;