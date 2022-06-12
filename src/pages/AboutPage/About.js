import './About.scss'
import React, { useEffect, useState } from 'react'
import AnimateLetters from '../../components/AnimateLetters'

function About() {
    const [letterClass, setLetterClass] = useState('animate-text');
    const aboutArray = ['A','b','o','u','t',' ','m','e'];
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="about-header">
                <AnimateLetters 
                    letterClass={letterClass}
                    strArray={aboutArray}
                    idx={15}
                />
            </div>
        </>
    )
}

export default About