import React from 'react'
import "./portfolio.css"
import data from './portfolioData'
import { Link } from 'react-router-dom'

const Portfolios = () => {
  return (
    <section id='portfolio' data-aos="fade-up">
      <h5>My Works </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map((item) => {
            const { id, image, title, github, demo } = item;
            return (
              <article key={id} className='portfolio_item' data-aos="zoom-in">
                <div className="card-border"></div>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <Link to={`/portfolio/${id}`} className='btn'>Details</Link>
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer" onClick={(e) => {
                    if (!demo) {
                      e.preventDefault();
                      alert("Sorry No live Demo on this project yet click on the Github to see the source files");
                    }
                  }}>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolios