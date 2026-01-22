import { useState } from "react"
import "./about.css"
import Me from "../../assets/IMG-20221204-WA0010.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  const [isExperienceModalVisible, setIsExperienceModalVisible] = useState(false);
  const [isClientsModalVisible, setIsClientsModalVisible] = useState(false);
  const [isProjectsModalVisible, setIsProjectsModalVisible] = useState(false);

  const experienceText = "At Ciphernet Technologies, I specialize in app development, seamlessly integrating front-end and back-end technologies. With skills in CodeIgniter, Flutter extends my capabilities to mobile platforms, and effective SQL database management optimizes data processing. Rigorous testing ensures application reliability.";
  const clientsText = "I am currently open to new opportunities and collaborations. I am eager to bring my skills in full-stack development to your projects and deliver high-quality solutions tailored to your specific needs.";
  const projectsText = "I have successfully completed over 4 projects, ranging from web applications to mobile apps. My portfolio showcases my ability to deliver robust, scalable, and user-friendly solutions using modern technologies.";

  return (
    <section id="about">
      <h5 >Get To Know</h5>
      <h2 >About Me</h2>
      <div className="container about__container">
        <div className="about_me">
          <div  className="about_me-image">
            <img  src={Me} alt="" />
          </div>
        </div>
  
        <div className="about_content">
          <div  className="about_cards">
            <article  
              className="about_card"
              onMouseEnter={() => setIsExperienceModalVisible(true)}
              onMouseLeave={() => setIsExperienceModalVisible(false)}
            >
              <div className="card-border"></div>
              <FaAward  className="about_icon"/>
               <h5>Experience</h5>
               <small>2+ Year Working</small>
               {isExperienceModalVisible && (
                 <div className="about__modal">
                   <p>{experienceText}</p>
                 </div>
               )}
            </article>
            <article  
              className="about_card"
              onMouseEnter={() => setIsClientsModalVisible(true)}
              onMouseLeave={() => setIsClientsModalVisible(false)}
            >
              <div className="card-border"></div>
              <FiUsers className="about_icon"/>
               <h5>Clients</h5>
               <small>Be My First Client</small>
               {isClientsModalVisible && (
                 <div className="about__modal">
                   <p>{clientsText}</p>
                 </div>
               )}
            </article>
            <article  
              className="about_card"
              onMouseEnter={() => setIsProjectsModalVisible(true)}
              onMouseLeave={() => setIsProjectsModalVisible(false)}
            >
              <div className="card-border"></div>
              <VscFolderLibrary className="about_icon"/>
               <h5>Projects</h5>
               <small>4+ Completed</small>
               {isProjectsModalVisible && (
                 <div className="about__modal">
                   <p>{projectsText}</p>
                 </div>
               )}
            </article>
          </div>
          <p>
            I am Augustine, a Front-End, Back-End, and App Developer based in Lagos, Nigeria. I am a self-taught professional with a strong passion for continuous learning and problem-solving. I value constructive feedback and am always looking for opportunities to grow. In my free time, I enjoy anime and gaming.
          </p>
          
         <a  href="#contact" className="btn btn-primary">Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About