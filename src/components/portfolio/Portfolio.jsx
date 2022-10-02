import React from 'react'
import './portfolio.css'
import IMG from '../../assests/project.png'
import IMG1 from '../../assests/project1.png'
import IMG2 from '../../assests/project2.png'
import IMG3 from '../../assests/project3.png'
import IMG4 from '../../assests/project4.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-item">
            <img src={IMG} alt="project" />
          </div>
          <h3>Created a bussiness website using MERN which helps to grow your bussiness.</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ayushbhatt14257/mernbussiness" className='btn' target='_blank'>Github</a>
            <a href="https://mernbussiness.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-item">
            <img src={IMG1} alt="project" />
          </div>
          <h3>MERN website helps in authentication of user while login and registration.</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ayushbhatt14257/mern-project" className='btn' target='_blank'>Github</a>
            <a href="https://ayushmernweb.herokuapp.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-item">
            <img src={IMG2} alt="project" />
          </div>
          <h3>Backend project in which node.js and mongoDB working together and store user's data in database.</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ayushbhatt14257/mern-project" className='btn' target='_blank'>Github</a>
            {/* <a href="https://ayushmernweb.herokuapp.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-item">
            <img src={IMG3} alt="project" />
          </div>
          <h3>ToDo-List created using react.js helps to manage your task's.</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ayushbhatt14257/react-todo-list" className='btn' target='_blank'>Github</a>
            <a href="https://todoayush.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-item">
            <img src={IMG4} alt="project" />
          </div>
          <h3>Tic-tac-toe created using pure javascript.</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ayushbhatt14257/Tic-tac-toe" className='btn' target='_blank'>Github</a>
            {/* <a href="https://ayushmernweb.herokuapp.com" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio