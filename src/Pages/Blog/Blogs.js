import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';

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
        <div>
            <Nav></Nav>
            < div className='container'>
                <br /><br /><br />
                <div className='about-part'>
                    <h1>OUR Special  <span className="green-text">Blogs</span></h1>
                    <h5>Welcome to the National Forest Foundation blog. Explore the various articles to learn more about our forests and places to play.</h5>
                </div>
                <div className="row row-cols-1 row-cols-md-4">
                    {
                        blogs.map(blog => <Blog
                            key={blog._id}
                            blog={blog}
                        ></Blog>)
                    }
                </div>
                <br /><br /><br />

            </div>

        </div>
    );
};

export default Blogs;