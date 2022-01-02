import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <div className='mega-nav'>
                <nav>
                    <div className="wrapper">
                        <div className="logo"><a href="#">tree</a></div>
                        <input type="radio" name="slider" id="menu-btn" />
                        <input type="radio" name="slider" id="close-btn" />
                        <ul className="nav-links">
                            <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/home">Products</Link></li>

                            <li>
                                <a href="#" className="desktop-item">Dropdown Menu</a>
                                <input type="checkbox" id="showDrop" />
                                <label for="showDrop" className="mobile-item">Dropdown Menu</label>
                                <ul className="drop-menu">
                                    <li><Link to="/galary">Gallery</Link></li>
                                    <li><a href="#">Drop menu 2</a></li>
                                    <li><a href="#">Drop menu 3</a></li>
                                    <li><a href="#">Drop menu 4</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="desktop-item">Mega Menu</a>
                                <input type="checkbox" id="showMega" />
                                <label for="showMega" className="mobile-item">Mega Menu</label>
                                <div className="mega-box">
                                    <div className="content">
                                        <div className="row">
                                            <img src="img.jpg" alt="" />
                                        </div>
                                        <div className="row">
                                            <header>Design Services</header>
                                            <ul className="mega-links">
                                                <li><a href="#">menu 1</a></li>
                                                <li><a href="#">menu 2</a></li>
                                                <li><a href="#">menu 3</a></li>
                                                <li><a href="#">menu 3</a></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Email Services</header>
                                            <ul className="mega-links">
                                                <li><a href="#">Personal Email</a></li>
                                                <li><a href="#">Business Email</a></li>
                                                <li><a href="#">Mobile Email</a></li>
                                                <li><a href="#">Web Marketing</a></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Security services</header>
                                            <ul className="mega-links">
                                                <li><a href="#">Site Seal</a></li>
                                                <li><a href="#">VPS Hosting</a></li>
                                                g<li><a href="#">Privacy Seal</a></li>
                                                <li><a href="#">Website design</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/home">Blogs</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;