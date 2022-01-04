import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
               const [blogs ,setBlogs] =useState([])
               // _____ fetch ____ 
               useEffect(()=>{
                              fetch("http://localhost:5000/blogs")  
                              .then(res=>res.json())   
                              .then(data=>setBlogs(data))
               
                      },[])
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
                 </div>
               );
};

export default Blogs;