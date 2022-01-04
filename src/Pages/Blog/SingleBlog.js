import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
               const { blogId } = useParams();
               const [blog,setBlog] = useState({})
               useEffect(()=>{
                          fetch(`http://localhost:5000/blogs/${blogId}`)
                          .then(res=>res.json())
                          .then(data=> setBlog(data))
                      },[])
               return (
                              <div class="container about-part">
  <div class="row row-cols-2 m-4 mx-4">
  {/* <div class="col">
    <br /><br /><br /><br />
<img className='w-25' src={blog.blogerImg} alt="" />
<h6>{blog.blog1}</h6>
    </div> */}
    
    <div class="col">
    <br /><br /><br /><br />
<img className='w-100' src={blog.img1} alt="" />

    </div>
    <br /><br />
    <div class="col text-start blog-texts">
    <br /><br /><br /><br />
   
<h1 className='green-text'>{blog.name}</h1>
<h5>{blog.blog1}</h5>
<br />
<h5>{blog.blog2}</h5>
<br />

<h5>{blog.blogerText}</h5>
<div className='d-flex'>
    
   <div><img className='bloger-img' src={blog.blogerImg} alt="" /></div> 
    
   <div className=''>
                  <br />
                  <p className='mx-4'>Posted on {blog.date} By {blog.blogerNam}</p> </div>        
</div>
<div className='d-flex'>
    <h4>Comments :{blog.comment}</h4> 
    <h4 className='mx-4'><i class="far fa-heart"> {blog.react}</i></h4>          
</div>

    </div>
    </div>
    </div>
               );
};

export default SingleBlog;