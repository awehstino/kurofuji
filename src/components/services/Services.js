import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
 
 
  
  return (
    <section id="services" data-aos="fade-up">
      <h5>What I Offer</h5>
      <h2 >Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className="service_list-icon"/> 
              <p>Intuitive User Interface Design.</p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>User Experience Research & Analysis.</p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>Wireframing & Interactive Prototyping.</p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>Mobile & Web App Design Systems.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className="service_list-icon"/> 
              <p>Responsive & Mobile-First Websites.</p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>Single Page Applications (React.js).</p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>Backend Development (PHP, MySQL).</p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>API Integration & Optimization.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>App Development</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className="service_list-icon"/> 
              <p>Cross-Platform Mobile Apps (Flutter).</p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>Native-Like Performance & Feel.</p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>iOS & Android Deployment.</p>
            </li>
            <li><BiCheck className="service_list-icon"/> 
              <p>App UI/UX Implementation.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services