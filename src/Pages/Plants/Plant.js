import React from 'react';
import { Link } from 'react-router-dom';
import './plants.css';
const plant = ({plant}) => {
               const {_id, name,more,title, Img } = plant;
               return (
                              <div className="container">
                                       
              
            <h3 >{name}</h3>
            
            <img className='service-img' src={Img} alt="" />
           <div className="follow">
           
           </div>

            <p className="">{}</p>
            {/* ___ button ________  */}
            <Link to={`/services/${_id}`}>
                <button className="btn fs-6 prgoram-text"> <i class="fas fa-info-circle"></i> BOOKING <i class="fas fa-angle-double-right"></i> </button>
            </Link>


            </div>      
                              
                              
               );
};

export default plant;