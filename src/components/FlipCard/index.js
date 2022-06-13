import './index.scss'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function FlipCard({ 
    projectName, 
    title, 
    description, 
    projectLink, 
    githubLink,
    img 
}) {

    return (
        <>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" id={`${projectName}-front`}>
                        <img src={img} alt={projectName} 
                        style={{ 
                            width: '100%', 
                            backgroundSize: 'center', 
                            backgroundColor: '#fff', 
                            maxWidth: '360px', 
                            maxHeight: '360px'
                        }}/>
                    </div>
                    <div class="flip-card-back" id={`${projectName}-back`}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a className="project-link" href={projectLink} target="_blank" rel="noreferrer">
                            {projectName}
                        </a>
                        <br />
                        <a className="github-link" href={githubLink} target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default FlipCard