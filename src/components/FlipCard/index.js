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
                        <img src={img} alt={projectName} style={{ backgroundSize: 'cover'}}/>
                    </div>
                    <div class="flip-card-back" id={`${projectName}-back`}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={projectLink} target="_blank" rel="noreferrer">
                            {projectName}
                        </a>
                        <br />
                        <a href={githubLink} target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default FlipCard