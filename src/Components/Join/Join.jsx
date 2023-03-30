import React,{useRef} from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"
const Join = () => {
  const form =useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pfs0fbl', 'template_p5qgz2g', form.current, '1tQOuQ_i67iGP_94-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='Join' >
        <div className="Join-left">
        <hr />
        
        <div>
            <span className='stroke-text'>ready to </span>
            <span>level up</span>
        </div>
        <div>
            <span>your body</span>
            <span className='stroke-text'>with us</span>
        </div>
       
        </div>
        <div className="Join-right">
         <form ref={form} onSumbit={sendEmail} className='email-container'>
          <input type="email" name='user_email' placeholder='Enter Your Email Address Here'/>
          <button className='btn btn-j'>Join Now</button>
         </form>
        </div>
    </div>
  )
}

export default Join