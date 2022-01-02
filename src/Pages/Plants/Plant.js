import React from 'react';
import { Link } from 'react-router-dom';
import './plants.css';
const plant = ({plant}) => {
               const {Id, name, Img } = plant;
               return (
                              <div className="container">
                                       
              
            <h3 >{name}</h3>
            
            <img className='service-img' src={Img} alt="" />
           <div className="follow">
           {/* <h6> {For}  <i className="fas fa-history"></i> </h6> */}
            {/* <p> Following  {follower} <i className="fas fa-heart"></i></p> */}
           </div>

            <p className="">{}</p>
            {/* ___ button ________  */}
            <Link to={`/services/${Id}`}>
                <button className="btn fs-6 prgoram-text"> <i class="fas fa-info-circle"></i> BOOKING <i class="fas fa-angle-double-right"></i> </button>
            </Link>


            </div>      
                              
                              
               );
};

export default plant;