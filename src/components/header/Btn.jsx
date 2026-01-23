import React from 'react'
import CV from "../../assets/Augustineawehjohn.pdf"

const Btn = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn' data-aos="fade-right">Download CV</a>
        <a href="#contact" className='btn btn-primary' data-aos="fade-left">Let`s Talk</a>
       
    </div>
  )
}

export default Btn