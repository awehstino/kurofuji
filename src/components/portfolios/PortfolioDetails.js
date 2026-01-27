import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from './portfolioData'
import "./portfolio-details.css"

const PortfolioDetails = () => {
  const { id } = useParams()
  const portfolio = data.find(item => item.id === parseInt(id))

  if (!portfolio) {
    return <section id='portfolio'><h2>Project not found</h2><Link to="/" className='btn btn-primary'>Back to Home</Link></section>
  }

  return (
    <section id='portfolio_details'>
      <div className="portfolio__details-image">
        <img src={portfolio.image} alt={portfolio.title} />
      </div>
      <div className="portfolio__details-content">
        <div className="container">
            <h2>{portfolio.title}</h2>
            <p>{portfolio.description}</p>
            <div className="portfolio__details-cta">
              <Link to="/kurofuji" className='btn'>Back</Link>
              <a href={portfolio.github} className='btn' target="_blank" rel="noreferrer">Github</a>
              <a href={portfolio.demo} className='btn btn-primary' target="_blank" rel="noreferrer" onClick={(e) => {
                if (!portfolio.demo) {
                  e.preventDefault();
                  alert("Sorry No live Demo on this project yet click on the Github to see the source files");
                }
              }}>Live Demo</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioDetails