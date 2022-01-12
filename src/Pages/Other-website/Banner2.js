import React from 'react';
import './Banner2.css';

const Banner2 = () => {
               return (
                              <div className='banner-2'>
                                             <div className="">
          <div className="row  text-start">
            <div className="col-lg-6  my-5">
              
              <h5 className='b-header'>WE HAVE CLASSY COLLECTION </h5>
              <h1 className='text-start b-text'>
                Swiss Engle Watch
              </h1>
              
              <div className='d-flex b-text'>
              <a class="btn btn-lg b-button " href="#"> 
                <span>Buy Now</span>
            </a>
              {/* <button className='b-button'>Buy now</button> */}
              <a class="btn btn-lg b-button " href="#">
                <span>Explore Now</span>
            </a>
              </div>
              
              
            </div>
            <div className="col-lg-6 ">
              <img className='b-img' src="http://sigmadigitalpartners.com/themes/templatemonster/wp/smatch/wp-content/uploads/2020/12/01.jpg" alt="" />
            </div>
          </div>
        </div>
        
                              </div>

               );
};

export default Banner2;