import React from 'react';
import CountUp from 'react-countup';
import { Zoom } from 'react-reveal';
import './TreeCount.css';


const TreeCount = () => {



    return (
        <div>
            <Zoom>

                <div className='container count-main'>
                    <div className='row row-cols-2  tree-spinner-count '>
                        <div className='col-md-6 col-lg-3 col-sm-6'>
                            <div>
                                <h1><CountUp end={7} duration={3} />/10</h1>
                            </div>

                            <h4>Top US</h4>

                        </div>
                        <div className='col-md-6 col-lg-3 col-sm-6'>
                            <h1><CountUp end={100} duration={5} /></h1>
                            <h4>Client Review</h4>
                        </div>
                        <div className='col-md-6 col-lg-3 col-sm-6'>
                            <h1>2/3</h1>
                            <h4>Best Price</h4>
                        </div>
                        <div className='col-md-6 col-lg-3 col-sm-6'>
                            <h1><CountUp end={300} duration={6} /></h1>
                            <h4>Original
                                Equipment</h4>
                        </div>
                    </div>
                </div>



            </Zoom>

        </div>
    );
};

export default TreeCount;