import React from 'react';
import { Link } from 'react-router-dom';
import './Tree.css';
const Tree = ({tree}) => {
               const {_id,name,title, image } = tree;
               return (
                              <div className="container">
                                       
              
            
            
            <img className='tree-img' src={image} alt="" />
            <h3 >{name}</h3>
            <Link to={`/indoor-plants/${_id}`}>
                <button className="btn fs-6 prgoram-text"> <i class="fas fa-info-circle"></i> BOOKING <i class="fas fa-angle-double-right"></i> </button>
            </Link>
           <div className="follow">
           
           </div>

            <p className="">{}</p>
            {/* ___ button ________  */}
            {/* <Link to={`/services/${_id}`}>
                <button className="btn fs-6 prgoram-text"> <i class="fas fa-info-circle"></i> BOOKING <i class="fas fa-angle-double-right"></i> </button>
            </Link> */}


            </div>      
               );
};

export default Tree;