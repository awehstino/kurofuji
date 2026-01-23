import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kj2mxj9', 'template_p2qubd4', form.current, '77z-pRzHPPFlkW84q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id="contact" data-aos="fade-up">
      <h5 >Get in Touch</h5>
      <h2 >Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.527638695278926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1648895514638!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"></iframe>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="to_name" value="Augustine John" />
          <input  type="text" name="name" placeholder="Your Full Name"  required/>
          <input  type="email" name="email" placeholder="Your Email"  required/>
          <textarea  name="message"  rows="7" required placeholder="Your Message Here"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <div className="contact_options">
          <article  className="contact_option">
            <div className="card-border"></div>
            <MdOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>augustinejohn@ciphernet.net</h5>
            <a href="mailto:augustinejohn@ciphernet.net">send a message</a>
          </article>

          <article  className="contact_option">
            <div className="card-border"></div>
            <RiMessengerLine className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Black Fugee</h5>
            <a href="http://m.me/awehdino/">send a message</a>
          </article>

          <article  className="contact_option">
            <div className="card-border"></div>
            <BsWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>Kuro Fuji</h5>
            <a href="http://wa.me/+2348159277797">send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact