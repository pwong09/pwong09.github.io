import './Projects.scss'
import React, { useEffect, useState } from 'react'
import AnimateLetters from '../../components/AnimateLetters';
import FlipCard from '../../components/FlipCard';
import minesweeper from '../../assets/images/minesweeper-1.png'
import animebutler from '../../assets/images/animebutler.png'
import kanshu from '../../assets/images/kanshu-1.png'
import fridges from "../../assets/images/cfridges.png"

function Projects() {
  const [letterClass, setLetterClass] = useState('animate-text');
  const projectsArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
        </div>
        <div className="project-cards">
          <p>Hello! Thank you for making it this far in my website!
            Due to Heroku's recent billing changes, I am in the process of
            moving my apps to a different hosting site.
            In the meantime, please review the README files for each project for
            my thought process and screenshots. Thank you for your patience!
          </p>
          {/* <h3>Community Fridges</h3>
                    <p>A full-stack CRUD web app built with Express, JavaScript, MongoDB/Mongoose, Node, React, Semantic-UI, Google Maps API and Geolocation API.</p>
                    <a className="project-link" href="https://cfridges.herokuapp.com" target="_blank" rel="noreferrer">Fridges</a>
                    <br />
                    <a className="project-github" href="https://github.com/pwong09/community-fridges" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div> */}
          <FlipCard
            projectName={'Minesweeper'}
            title={'Minesweeper'}
            description={'A revamped version of the classic logic-based puzzle using HTML5, CSS3, and JavaScript.'}
            // projectLink={'https://pwong09.github.io/minesweeper'}
            githubLink={'https://github.com/pwong09/minesweeper'}
            img={minesweeper}
          />
          <FlipCard
            projectName={'AnimeButler'}
            title={'AnimeButler'}
            description={'A collaboratively built full-stack CRUD web app built with CSS, Django, PostgreSQL, Python and the Jikan API to browse and add anime you\'re interested in watching!'}
            projectLink={'https://animebutler.herokuapp.com'}
            githubLink={'https://github.com/eightdurty1/animebutler'}
            img={animebutler}
          />
          <FlipCard
            projectName={'Kanshu'}
            title={'Kanshu - Books Tracking'}
            description={'A full-stack CRUD web app with RESTful routes - utilizing Google Books API and built with Express on Node.js, Bootstrap CSS, JavaScript/EJS, and MongoDB/mongoose to track and store books you\'ve read.'}
            projectLink={'https://kanshu.herokuapp.com'}
            githubLink={'https://github.com/pwong09/books-tracker-app'}
            img={kanshu}
          />
          <FlipCard
            projectName={'Fridges'}
            title={'Community Fridges'}
            description={'A full-stack CRUD web app built with Express, JavaScript, MongoDB/Mongoose, Node, React, Semantic-UI, Google Maps API and Geolocation API.'}
            projectLink={'https://cfridges.herokuapp.com'}
            githubLink={'https://github.com/pwong09/community-fridges'}
            img={fridges}
          />
        </div>
      </div>
    </>
  )
}

export default Projects