import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../../team-project-img/logo/logo.png'
import mega from '../../../team-project-img/img1.jpg';
import useAuth from '../../../hooks/useAuth';

const Nav = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className='mega-nav pb-3'>
                <nav>
                    <div className="wrapper animate__backInDown">
                        <div className="logo"><Link to="/home">
                            <img src={logo} alt="" width={80} /></Link></div>
                        <input type="radio" name="slider" id="menu-btn" />
                        <input type="radio" name="slider" id="close-btn" />
                        <ul className="nav-links">
                            <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/trees">Products</Link></li>
                            <li>
                                <a href="#" className="desktop-item">Mega Menu</a>
                                <input type="checkbox" id="showMega" />
                                <label for="showMega" className="mobile-item">Mega Menu</label>
                                <div className="mega-box">
                                    <div className="content">
                                        <div className="row">
                                            <img src={mega} alt="" />
                                        </div>
                                        <div className="row">
                                            <header>Design Services</header>
                                            <ul className="mega-links">
                                                <li><Link to="/galary">Gallery</Link></li>
                                                <li><Link to="/blogs">Blogs</Link></li>
                                                <li><Link to="/trees">Trees</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Main Catagories</header>
                                            <ul className="mega-links">
                                                <li> <Link to="/services/61d2902930b9039c684992d0">Out Door Plants</Link> </li>
                                                <li> <Link to="/services/61d297f530b9039c6858b7e3">Office Plants</Link> </li>
                                                <li> <Link to="/services/61d29eb630b9039c6865a870"> Plant Pot</Link> </li>
                                                <li> <Link to="/services/61d2a59d30b9039c68728f8b"> Plant Awesome</Link> </li>


                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header> Customer services</header>
                                            <ul className="mega-links">
                                                <li> <Link to="/faq"> FAQ</Link> </li>
                                                <li> <Link to="/faq">Contact</Link> </li>
                                                <li> <Link to="/faq">Privacy Policy</Link> </li>


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {
                                user?.email ?

                                    <li>
                                        <a href="#" className="desktop-item">{user.displayName}</a>
                                        <input type="checkbox" id="showDrop" />
                                        <label for="showDrop" className="mobile-item">{user.displayName}</label>
                                        <ul className="drop-menu">
                                            <li><Link to="/dashboard">Dashboard</Link></li>

                                            <li><Link to="" onClick={logOut}>LogOut</Link></li>


                                        </ul>
                                    </li>
                                    :
                                    <li><Link to="/login">Login</Link></li>
                            }
                        </ul>
                        <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                    </div>
                </nav>
            </div>

        </div >
    );
};

export default Nav;