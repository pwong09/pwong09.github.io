import './index.scss'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function FlipCard({
  projectName,
  title,
  description,
  projectLink = '',
  githubLink,
  img
}) {

  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" id={`${projectName}-front`}>
            <img src={img} alt={projectName} className="flip-card-image" />
          </div>
          <div className="flip-card-back" id={`${projectName}-back`}>
            <h3>{title}</h3>
            <p>{description}</p>
            {projectLink ?
              <>
                <a className="project-link" href={projectLink} target="_blank" rel="noreferrer">
                  {projectName}
                </a>
                <br />
              </>
              : ''}
            <a aria-label="Github" className="github-link" href={githubLink} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
