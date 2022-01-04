import React from 'react';
import { Link } from 'react-router-dom';
import './plants.css';
const plant = ({ plant }) => {
    const { _id, name, more, title, Img } = plant;
    return (
        <div className="container">


            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="box">
                        <img className='service-img' src={Img} />
                        <div class="box-content">
                            <h3 class="title">{name}</h3>
                            <span class="post">All Plants</span>
                            <Link to={`/services/${_id}`}>
                                <ul class="icon">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                </ul>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default plant;

{/* <h3 >{name}</h3>
            
            <img className='service-img' src={Img} alt="" />
           <div className="follow">
           
           </div>

            <p className="">{}</p>
            {/* ___ button ________  */}
            // <Link to={`/services/${_id}`}>
            //     <button className="btn fs-6 prgoram-text"> <i class="fas fa-info-circle"></i> BOOKING <i class="fas fa-angle-double-right"></i> </button>
            // </Link> */}