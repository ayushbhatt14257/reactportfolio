import React from 'react'
import './services.css'
import { BiCheckDouble } from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className='container service_container'>
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Design Initiation</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Technical UI development</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Problem-Solving</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Create conceptual diagrams</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Usability Testing</p>
            </li>
          </ul>
        </article>
        {/* end of ui ux  */}

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Designing user interfaces and navigation menus</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Writing and reviewing code for sites, typically HTML, XML, or JavaScript</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Integrating multimedia content onto a site</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Testing web applications</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Troubleshooting problems with performance or user experience</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Collaborating with designers, developers, and stakeholders</p>
            </li>
          </ul>
        </article>
        {/* end of Web Development  */}

        <article className='service'>
          <div className="service_head">
            <h3>FUll Stack Developement </h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Frontend web developement - creating the visual part of the website</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Creating the pages visitors see and interact with</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Back-end web developement creating the website’s structure</p>
            </li>

            <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>write code, and verify the code works.</p>
            </li>

            {/* <li>
              <BiCheckDouble className = 'Service_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li> */}
          </ul>
        </article>
        {/* end of Content Creation  */}
      </div>
    </section>
  )
}

export default Services