import React from 'react';
import ConnectUs from '../ConnectUs/ConnectUs';
import './About.css'
const About = () => {
  return (
    <div className='about-part'>
      <br /><br /> <br />

      <h1 className='about-head'><span className='green-text'>Who</span> We Are?</h1>
      <p className='container'>We source all indoor plants and planters from our trusted network of growers, artisans, designers, and manufacturers to meet the unique needs of your
        business. Schedule your complimentary on-site Plant Design Consultation.</p>
      <br /><br /><br />
      <div className='container'>
        <div className="row">
          <br /><br /><br />
          <div class="text-start col-4">
            <h2 className='text-start'>INDOOR PLANT INSPIRATION?</h2>
            <hr />
            <h5 className='green-text'>EXCELLENT SERVICES</h5>
            <p>Natoque diam sodales tortor nibh mollis tellus, imperdiet proin a Sed mattis non elit in.</p>
            <br />
            <h5 className='green-text'>LICENSED & INSURED</h5>
            <p>Natoque diam sodales tortor nibh mollis tellus, imperdiet proin a Sed mattis non elit in.</p>
          </div>
          <div class="col-8">
            <img className='about-img' src="https://demo.yolotheme.com/begreen/wp-content/uploads/2016/08/who-we-are-h7.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;