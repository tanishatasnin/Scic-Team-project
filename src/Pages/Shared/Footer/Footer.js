import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../team-project-img/logo/logo.png'
import { Slide } from 'react-reveal';

const Footer = () => {
    return (
        <div className='  upper-footer'>

            <div className=' addition-bg '>
                <div className='mx-3  '>
                    <div className='row  '>
                        <div className='col-lg-4 col-sm-12'>
                            <img src={logo} alt="" width={133} />
                            <p >We are a creative company that specializes in strategy & design. We like to create things with like - minded people who are serious about their passions.</p>
                            <div className='mt-5 social-icon   '>
                                <Slide left>
                                    <i className="fab fa-linkedin-in paddin"></i>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-vimeo-v"></i>
                                </Slide>
                            </div>

                        </div>
                        <div className='col-lg-4 col-sm-12 pt-5'>
                            <h2 className='animate__shakeY about-head'>Our Office</h2>
                            <ul className='footer-contact mt-5'>
                                <li> <i class="fas fa-map-marker-alt">
                                </i></li>
                                <li className='px-3'> 69 North Cleveland Street, Memphis,USA.</li>
                            </ul>
                            <ul className='footer-contact pt-2'>
                                <li><i className="far fa-phone-alt "></i></li>
                                <li className='px-3'> (123) 8111 9210 <br />
                                    (012) 1111 6868</li>
                            </ul>
                            <ul className='footer-contact pt-2'>
                                <li><i className="fas fa-envelope"></i></li>
                                <li className='px-3'> nature-love@tree.com</li>
                            </ul>
                        </div>
                        <div className='col-lg-4 col-sm-12 pt-5'>
                            <h2 className='about-head'>News Letter</h2>
                            <p className='mt-5 pb-3'>Subcribe to our newsletter to get more free tips. No Spam, Promise.
                            </p>
                            <div>
                                <input className='px-5 py-2 text-white footer-form' type="email" name="Email" placeholder='Enter Your Email' id="" />
                                <br />
                                <button className='mt-2 footer-btn about-head'>SignUp</button>
                            </div>
                        </div>
                    </div>
                    <div className='p-5'>
                        <Slide right>
                            <Link className=' top-text text-decoration-none' to="/home"><i class="far fa-angle-double-up"></i><h3 className='about-head '>TOP</h3></Link>
                        </Slide>
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