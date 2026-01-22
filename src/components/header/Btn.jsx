import React from 'react'
import CV from "../../assets/Augustineawehjohn.pdf"

const Btn = () => {
  return (
    <div className="cta">
        <a  href={CV} download className='btn'>Download CV</a>
        <a   data-aos-duration="4000" href="#contact" className='btn btn-primary'>Let`s Talk</a>
       
    </div>
  )
}

export default Btn