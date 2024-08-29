import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hfgh4kg', 'template_18g95so', form.current, {
        publicKey: 'yiFodgMxgGVFxUhoX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const message=()=>{
   alert("Message Send Successfully")
  }

  return (
    <>
      <div className="contact">
        <div className="formed">
          {/* Form starts here */}
          <form ref={form} onSubmit={sendEmail}>
            <input  type="text" placeholder="Name" name="from_name" required />
            <br />
            <input type="email" placeholder="Email" name="user_email" required />
            <br />
            <textarea name="message" placeholder="Message" id="msg"></textarea>
            <br />
            <input id='inpsend' type="submit" onClick={message} value="Send" />
          </form>
          {/* Form ends here */}
        </div>

        <div className="address">
          <div className="backadd">
            {/* Address section */}
            <div className="add">
              <h2>Address:</h2>
              <i className="fa-solid fa-location-dot"></i>
              <p>198 RB Muniawala Faisalbad.</p>
            </div>

            {/* Phone section */}
            <div className="add">
              <h2>Phone:</h2>
              <i className="fa-solid fa-phone"></i>
              <p>+923006674246</p>
            </div>

            {/* Email section */}
            <div className="add">
              <h2>Email:</h2>
              <i className="fa-solid fa-envelope"></i>
              <p>ch007abdullah@gmail.com</p>
            </div>

            {/* Social section */}
            <div className="add">
              <h2>Get Social:</h2>
              <a href=""><i className="fa-brands fa-whatsapp"></i></a>
              <a href="https://www.linkedin.com/in/ch-abdullah-977033310/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
