export const particlesConfig = {
  background: {
    color: {
      value: "#053225",
    },
  },
  fpsLimit: 50,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 3,
      },
      repulse: {
        distance: 23,
        duration: 1,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.8,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1029,
      },
      value: 88,
    },
    opacity: {
      value: 0.8,
    },
    shape: {
      type: "polygon",
    },
    size: {
      value: { min: 0.23, max: 3 },
    },
  },
  detectRetina: true,
}
