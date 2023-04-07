import React from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import * as options from "../../config/particlesConfig"

function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  }
  const particlesLoaded = () => {}

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options.particlesConfig}
    />
  )
}

export default Particle