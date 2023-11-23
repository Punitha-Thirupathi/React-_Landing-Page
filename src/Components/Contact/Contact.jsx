import React, { useRef } from 'react'
import './Contact.css'
import brand1 from '../../Assests/apple.png'
import brand2 from '../../Assests/sam.avif'
import brand3 from '../../Assests/lg.png'
import brand4 from '../../Assests/whirlpool.jpg'
import whatsapp from '../../Assests/whatsapp.png'
import facebook from '../../Assests/facebook.png'
import instagram from '../../Assests/instagram.png'
import mail from '../../Assests/mail.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ba9bdlf', 'service_ba9bdlf', form.current, 'N_Fc7CV23lC0xJ0ZjnHfW')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent')
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id="brandPage">
        <div id="brand">
            <h1 className="brandPageTitle">Our Brands</h1>
            <p className="brandtDesc">
            A list of home appliances brands typically includes a variety of electrical or mechanical devices used for various purposes in a household
            </p>
            <div className='brandImgs'>
            <img src={brand1} alt="" className="brandImg" />
            <img src={brand2} alt="" className="brandImg" />
            <img src={brand3} alt="" className="brandImg" />
            <img src={brand4} alt="" className="brandImg" />
            </div>
        </div>
        <div id ="customer">
            <h1 className="customerPageTitle">Customer serivce</h1>
            <span className="customerDesc">Please the fill out the form below to discuss any services for home applaiances.</span>
            <form className='customerForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name' />
                <input type="email" className="email"  placeholder='Your Email' name='your_email'/>
                <textarea  className ='msg' name="message" rows='5' placeholder="Your Message"></textarea>
                <button type='submit' value='sent' className="submitBtn"> Submit</button>
                <div className='Links'>
                    <img src={whatsapp} alt="" className="link" />
                    <img src={facebook} alt="" className="link" />
                    <img src={instagram} alt="" className="link" />
                    <img src={mail} alt="" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact