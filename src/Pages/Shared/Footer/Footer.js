import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../team-project-img/logo/logo.png'

const Footer = () => {
    return (
        <div className='  upper-footer'>

            <div className=' addition-bg '>
                <div className='mx-3  '>
                    <div className='row  pt-5'>
                        <div className='col-lg-4 col-sm-12'>
                            <img src={logo} alt="" width={130} />
                            <p >We are a creative company that specializes in strategy & design. We like to create things with like - minded people who are serious about their passions.</p>
                            <div> <i className="fab fa-linkedin-in"></i>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-vimeo-v"></i></div>

                        </div>
                        <div className='col-lg-4 col-sm-12'>
                            <h2 className='about-head'>Our Office</h2>
                            <div className=' mt-5 d-flex container'>
                                <i class="fas fa-map-marker-alt">
                                    <h5>Address</h5></i>
                            </div>
                            <div><i class="far fa-phone-alt"></i>
                                <h5>Call</h5>
                            </div>
                            <div><i class="fas fa-envelope"></i>
                                <h5>Email Us</h5>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12'>
                            <h2 className='about-head'>News Letter</h2>
                            <p className='mt-5'>Subcribe to our newsletter to get more free tips. No Spam, Promise.
                            </p>
                            <form action="">
                                <input type="email" name="Email" placeholder='Enter Your Email' id="" />
                                <br />
                                <button>SignUp</button>
                            </form>
                        </div>
                    </div>
                    <div className='p-5'>
                        <Link className='text-decoration-none' to="/home"><i class="far fa-angle-double-up"></i><h3>TOP</h3></Link>
                    </div>


                </div>
            </div>
            <div className="footer-bottom">
                <h5 className='about-head'>Name © Text 2022 COPYRIGHT</h5>
            </div>
        </div>
    );
};

export default Footer;