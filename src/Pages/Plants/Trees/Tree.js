import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Shared/Nav/Nav';
import './Tree.css';
const Tree = ({ tree }) => {
    const { _id, name, title, image } = tree;
    return (
        <>
            <div className="container">


                <div class="row">
                    <div class="col-md-3 col-sm-6  m-4 p-4">
                        <div class="box1">
                            <img className='service-img' src={image} />
                            <div class="box1-content">
                                <h3 class="title">{title}</h3>
                                <span class="post">About Plants</span>
                                <Link to={`/indoor-plants/${_id}`}>
                                    <ul class="icon">
                                        <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    </ul>
                                </Link>
                            </div>

                        </div>
                        <br />
                        <h5 className='tex-nam'>{name}</h5>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Tree;