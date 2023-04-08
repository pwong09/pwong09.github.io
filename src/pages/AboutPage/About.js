import './About.scss'
import React, { useEffect, useState } from 'react'
import AnimateLetters from '../../components/AnimateLetters'
import { FaPython, FaReact, FaCss3Alt, FaGithubSquare, FaHtml5 } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

function About() {
  const [letterClass, setLetterClass] = useState('animate-text');
  const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page" tabIndex="-1">
        <div className="text-zone">
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I am a Full-Stack Software Developer with a background in economics and community organizing.
          </p>
          <br />
          <p>
            I am passionate about creating accessible products and improving user experiences and engagement.
          </p>
          <br />
          <p>
            As an experienced organizer, I approach work with a holistic lens, a strong work ethic, and a collaborative mindset.
          </p>
          <br />
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaPython color="#DD0031" />
            </div>
            <div className="face2">
              <FaHtml5 color="#F06529" />
            </div>
            <div className="face3">
              <FaCss3Alt color="#28A4D9" />
            </div>
            <div className="face4">
              <FaReact color="#5ED4F4" />
            </div>
            <div className="face5">
              <SiJavascript aria-hidden="true" color="#EFD81D" />
            </div>
            <div className="face6">
              <FaGithubSquare color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About