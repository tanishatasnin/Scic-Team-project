import React from 'react';
import './Blog.css'
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { _id, name, title, date, blogerImg, blogerNam, img2 } = blog;
    return (
        <div className="container">


            <br /><br /><br /><br /> <br />
            <div className='blog shadow-lg'>
                <Link to={`/blogs/${_id}`}>
                    <img className='img1-size' src={img2} alt="" />
                </Link>
                {/* <img className='img1-size' src={img2} alt="" /> */}
                <div className='mx-2'>
                    <h6 className='text-start'>Posted on {date} By {blogerNam}</h6>
                    <div className='d-flex'>
                        <img className='bloger-img-home' src={blogerImg} alt="" />
                        <h5 className='text-start mx-2'>{name} </h5>
                    </div>

                    <Link to={`/blogs/${_id}`}>
                        <ul class="icon text-start">
                            <a className=' more-details text-start fs-5  green-text' href="#"><i class="fas fa-home"></i>Read More </a>
                        </ul>
                    </Link>
                </div>


            </div>



        </div>
    );
};

export default Blog;