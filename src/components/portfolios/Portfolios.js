import React from 'react'
import "./portfolio.css"
import Folio from "../../assets/IMG_20230204_170914.jpg"
import food_univers from "../../assets/IMG_20230916_102030.jpg"
import reel from "../../assets/projects/reel.png"
import cresta from "../../assets/projects/cresta.png"
import crm from "../../assets/projects/crm.png"
import rminter from "../../assets/projects/rminter.png"
import timesheet from "../../assets/projects/timesheet.png"

const data = [
  {
    id: 1,
    image: reel,
    title: 'Reel Website',
    github: 'https://github.com/awehstino',
    demo: ''
  },
  {
    id: 2,
    image: cresta,
    title: 'Cresta Dashboard',
    github: 'https://github.com/awehstino',
    demo: ''
  },
  {
    id: 3,
    image: crm,
    title: 'CRM Dashboard',
    github: 'https://github.com/awehstino',
    demo: 'https://crm.ikonectt.com'
  },
  {
    id: 4,
    image: rminter,
    title: 'RM International Website',
    github: 'https://github.com/awehstino',
    demo: 'https://rminternationaloficial.com/'
  },
  {
    id: 5,
    image: Folio,
    title: 'To Do List Manager',
    github: 'http://github.com/awehstino/to-do-manager',
    demo: ''
  },
  {
    id: 6,
    image: food_univers,
    title: 'Food Universe',
    github: 'http://github.com/awehstino/food_univers',
    demo: ''
  },
  {
    id: 7,
    image: timesheet,
    title: 'Timesheet Management System',
    github: 'http://github.com/awehstino/food_univers',
    demo: 'https://timesheet.ciphernetsandbox.com.ng/public/'
  }
]

const Portfolios = () => {
  return (
    <section id='portfolio'>
      <h5>My Works </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="card-border"></div>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
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