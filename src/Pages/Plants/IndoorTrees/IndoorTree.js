import React from 'react';
import { Link } from 'react-router-dom';
import './Indor.css';
const IndoorTree = ({plant}) => {
               const {_id, name,price,tags,title,about, image } = plant;
               return (
                              
<div class="container">
  <div class="row row-cols-2">
    
    
    <div class="col">
    <br /><br />
<img className='plants-img' src={image} alt="" />
    </div>
    <div class="col text-start about-part">
                   <br /><br /><br /><br /><br />
                <h2 className='text-danger'>{name}</h2> 
                <h5>{title}</h5>
                <p>{about}</p> 
                <h5>{tags}</h5> 
                <h1>$ {price} </h1>
                {/* <Link to={`/indoor/${_id}`}>
                <button className="btn fs-6 prgoram-text"> <i class="fas fa-info-circle"></i> BOOKING <i class="fas fa-angle-double-right"></i> </button>
            </Link> */}
                {/* <button>Buy Now</button> */}
    </div>
    
  </div>
  <hr />
</div>


                              //      <h3 >{name}</h3> 
                              //      <img src={image} alt="" />         
                              
               );
};

export default IndoorTree;