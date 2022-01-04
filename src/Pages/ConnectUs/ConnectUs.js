import React from 'react';
import './ConnectUs.css';
import emailjs from 'emailjs-com';
const ConnectUs = () => {
  // +++++++++++ emailjs+++++++++++++ 
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_4a4v9vg', 'template_tp8vv4b', e.target, 'user_Y3B0dVjOC82H8RHdhyAlx')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  return (
    <div>
      <small>.</small>
      <div class="">

        <div class=" connect-img row row-cols-2">
          <div class="col">
            <br /><br />
            <img className='con-img' src='http://cdn.home-designing.com/wp-content/uploads/2016/08/large-outdoor-turtle-planter-600x390.jpg' width={600} alt="" />
          </div>
          <div class="col  about-part">
            <br /><br /><br /><br />
            <h1 className='text-contact text-white'>Join Tree
              <span className='green-text'> Our Service</span></h1>
            <form className=" " onSubmit={sendEmail}>


              <label htmlFor="email"></label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="p-2 m-2 contact-form  w-25 "
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
              <input type="submit" value="Submit" className="footer-btn p-2 w-25 m-2 mb-5" />
            </form>
          </div>

        </div>

      </div>

    </div>

  );
};

export default ConnectUs;