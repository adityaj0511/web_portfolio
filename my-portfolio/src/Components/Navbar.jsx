// src/components/Navbar.js
import React from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container mb-2 d-flex justify-content-between align-item-center">
                <a href="#home" className="logo mt-2">PortFolio</a>
                <button className="btn btn-toggler d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#slidebar">
                    <span><FaBars className="d-lg-none text-white" /></span>
                </button>

                <ul className="navbar-nav d-xs-none d-flex d-sm-none d-md-none d-lg-flex">
                    <li className="nav-item"><a href="#home" className="nav-link me-3">HOME</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link me-3">ABOUT</a></li>
                    <li className="nav-item"><a href="#work" className="nav-link me-3">WORKS</a></li>
                    <li className="nav-item"><a href="#port" className="nav-link me-3">PORTFOLIO</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link me-3">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;