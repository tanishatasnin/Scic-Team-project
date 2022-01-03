import React from 'react';
import './ConnectUs.css';
import emailjs from 'emailjs-com';
const ConnectUs = () => {
               // +++++++++++ emailjs+++++++++++++ 
               const sendEmail = (e) => {
                              e.preventDefault();
               

    emailjs.sendForm('service_4a4v9vg','template_tp8vv4b', e.target, 'user_Y3B0dVjOC82H8RHdhyAlx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
               }
               return (
                              <div>
                                             <br /><br /><br /><br /><br /><br />
                                  
                                             <div class="connect-img">
  <div class="row row-cols-2 m-4 mx-4">
    
    
    <div class="col">
    <br /><br /><br /><br />
<img className='con-img' src='http://cdn.home-designing.com/wp-content/uploads/2016/08/large-outdoor-turtle-planter-600x390.jpg' alt="" />
    </div>
    <div class="col  about-part">
                   <br /><br /><br /><br /><br />
                <h1 className='text-contact text-white'>Join Tree
 <span className='green-text'> Our Service</span></h1>
<form onSubmit={sendEmail}>
                  
                   
            <label htmlFor="email"></label>
<input
              type="name"
              name="name"
              placeholder="Name"
              className="p-2 m-2  w-25 "
//               onBlur={handlePasswordChange}
              required
            />
            <input
//               type="number"
              name="number"
              placeholder="phone Number"
              className="p-2 m-2  w-25"
//               onBlur={handlePasswordChange}
              required
            />
            
            
            <input
              type="text"
              name="email"
              
              placeholder="Enter Email"
              className="p-2 w-50 m-2 "
              required
            />
            <br />
            
            
           
            <input
//               
              
              textarea name="message"
              placeholder="Massage"
              className=" p-2 m-2 px-4 py-4  w-50 h-50"
//               onBlur={handlePasswordChange}
              required
            />
            <br />
            <input type="submit" value="Submit" className="p-2 w-50 m-2" />
          </form>
    </div>
    
  </div>
  
            </div>   
            </div>        
                              
               );
};

export default ConnectUs;