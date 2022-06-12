import './Home.scss';
import React, {useState, useEffect} from 'react';
import AnimateLetters from '../../components/AnimateLetters';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['I','\'','m',' ','P','e','a','r','l',' ','W','o','n','g'];
  const pronounsArray = [' ','t',' h ','e','y',' ','/',' ','t','h','e','m']

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
}, [])

  return (
    <>
      <div className="container home-page">
        <div className="header-container">
            <h2>Hi</h2>
            <h1>
            <AnimateLetters 
              letterClass={letterClass}
              strArray={nameArray} 
              idx={15}
            />
          </h1>
          <h3>my pronouns are 
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