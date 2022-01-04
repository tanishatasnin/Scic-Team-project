import React, { useEffect, useState } from 'react';
import Faq from '../Faq/Faq';
import Blog from './Blog';

const Blogs = () => {
               const [blogs, setBlogs] = useState([])
               // _____ fetch ____ 
               useEffect(() => {
                              fetch("https://boiling-forest-63211.herokuapp.com/blogs")
                                             .then(res => res.json())
                                             .then(data => setBlogs(data))

               }, [])
               return (
                              < div className='container'>
                                             <div>
                                                            <h1>OUR  <span className="The-Journal">plants</span></h1>
                                             </div>
                                             <div className="row row-cols-1 row-cols-md-4">
                                                            {
                                                                           blogs.map(blog => <Blog
                                                                                          key={blog._id}
                                                                                          blog={blog}
                                                                           ></Blog>)
                                                            }
                                             </div>
                                             <Faq></Faq>
                              </div>
               );
};

export default Blogs;