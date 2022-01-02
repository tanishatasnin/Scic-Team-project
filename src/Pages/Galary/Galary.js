import React from 'react';
import img1 from '../../team-project-img/img1.jpg';
import img2 from '../../team-project-img/img2.jpg';
import img3 from '../../team-project-img/img3.jpg';
import img4 from '../../team-project-img/img4.jpg';
import img5 from '../../team-project-img/img5.jpg';
import img6 from '../../team-project-img/img6.jpg';
import img7 from '../../team-project-img/img7.jpg';
import img8 from '../../team-project-img/img8.jpg';
import img9 from '../../team-project-img/img9.jpg';
import img10 from '../../team-project-img/img10.jpg';
import img11 from '../../team-project-img/img11.jpg';
import img12 from '../../team-project-img/img12.jpg';
import img13 from '../../team-project-img/img13.jpg';
import img14 from '../../team-project-img/img14.jpg';
const Galary = () => {
               return (
                              <div class="container">
                                             <br /><br /><br />
                              <div className='about-head'>
                                  <h1 >Made your house <span className='green-text'>beautyful !</span></h1>  
                                       <h5 className='about-head'> Plants not only make a 
                                                      room feel more cozy and welcoming,
                                                       but they're also good for your mental
                                                        and physical health. </h5>
                                                        <h5>When you're adding to your plant family, take a look at your lighting situation before you buy. Indoor plants that prefer bright light generally need south-facing windows, where the most concentrated light is available. East- or west-facing windows also are good, but the light is less intense.</h5>

                              </div>
                              <br /><br />
<div class="row">
<div class="col-4">
               <div class="row mb-3">
<img className='img-fluid' src={img1} alt="" />
               </div>
               
         <div class="row mb-3">
               <img className='img-fluid' src={img2} alt="" />
         </div>      
         <div class="row mb-3">
         <img className='img-fluid' src={img3} alt="" />
      </div>
      <div class="row mb-3">
         <img className='img-fluid' src={img12} alt="" />
      </div>      

</div>
<div class="col-4"> 
<div class="row mb-3">
                     <div class="col-6">
                     <img className='img-fluid' src={img8} alt="" />
                     </div>
                     <div class="col-6">
                     <img className='img-fluid' src={img9} alt="" />
                     </div>
                  
                  
               </div>
               <div class="row mb-3">
               <img className='img-fluid' src={img4} alt="" />            
               </div>
               <div class="row mb-3">
               <img className='img-fluid' src={img5} alt="" />        
               </div>
               
               <div class="row mb-3">
               <img className='img-fluid' src={img6} alt="" />       
               </div>
               <div class="row mb-3">
               <img className='img-fluid' src={img7} alt="" />         
               </div>
               
               
            
               
</div>
<div class="col-4">
               <div class="row mb-3">
               <img className='img-fluid' src={img13} alt="" />            
               </div>
               <div class="row mb-3">
               <img className='img-fluid' src={img14} alt="" />                   
                     </div>
                   
                     <div class="row mb-3">
                     <img className='img-fluid' src={img10} alt="" />         
                     </div>
                     <div class="row mb-3">
                     <div class="col-6">
                  <img className='img-fluid' src={img11} alt="" />
                  </div>
                  <div  class="col-6">
                  <img className='img-fluid' src={img10} alt="" />
                  </div>
                  <div class="col-12  mb-3">
                  <img className='img-fluid' src={img12} alt="" />  
                     </div>
               </div>
               
</div>


</div>

</div>


               );
};

export default Galary;