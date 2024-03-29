import './Home.scss';
import React, {useState, useEffect} from 'react';
import AnimateLetters from '../../components/AnimateLetters';
import Particle from '../../components/Particle';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['I','\'','m',' ','P','e','a','r','l',' ','W','o','n','g'];
  const pronounsArray = ['M','y',' ','p','r','o','n','o','u','n','s',' ','a','r','e',' ','t',' h ','e','y',' ','/',' ','t','h','e','m']
  const jobArray = ['F','u','l','l','-','S','t','a','c','k',' ','D','e','v','e','l','o','p','e','r']

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
}, [])

  return (
    <>
      <div className="container home-page" tabIndex="-1">
        <Particle />
        <div className="header-container">
          <h1>Hi,</h1>
          <h2 className="my-name">
            <AnimateLetters 
              letterClass={letterClass}
              strArray={nameArray} 
              idx={15}
            />
          </h2>
          <h3>
            <AnimateLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h3>
          <h3>
            <AnimateLetters 
              letterClass={letterClass}
              strArray={pronounsArray}
              idx={15}
            />
          </h3>
        </div>
      </div>
    </>
  )
}