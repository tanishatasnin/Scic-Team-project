import React from 'react';
import CountUp from 'react-countup';


const TreeCount = () => {



    return (
        <div>
            <div className='container'>
                <div className='row '>
                    <div className='col-md-6 col-lg-3 col-sm-12'>
                        <h1>7/10</h1>
                    </div>
                    <div className='col-md-6 col-lg-3 col-sm-12'>
                        <h1>100</h1>
                    </div>
                    <div className='col-md-6 col-lg-3 col-sm-12'>
                        <h2>2/3</h2>
                    </div>
                    <div className='col-md-6 col-lg-3 col-sm-12'>
                        <h2>300</h2>
                    </div>
                </div>
            </div>




            <CountUp end={123457} duration={5} />



        </div>
    );
};

export default TreeCount;