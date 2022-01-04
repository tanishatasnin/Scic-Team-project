import React from 'react';
import './Blog.css'
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
               const { _id, name, title, img1 } = blog;
               return (
                              <div className="container">




                                             <img className='img1-size' src={img1} alt="" />
                                             <h3 >{name}</h3>
                                             <Link to={`/blogs/${_id}`}>
                                                            <button className="btn fs-6 prgoram-text"> <i class="fas fa-info-circle"></i> BOOKING <i class="fas fa-angle-double-right"></i> </button>
                                             </Link>
                                             <div className="follow">

                                             </div>

                                             <p className="">{ }</p>



                              </div>
               );
};

export default Blog;