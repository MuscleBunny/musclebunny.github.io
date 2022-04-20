export default {
  fullScreen: {
    enable: false
  },
  background: {
    color: "#252934"
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      resize: true,
      onClick: {
        enable: true,
        mode: 'push'
      },
    }
  },
  modes: {
    push: {
      quantity: 4
    },
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    "move": {
      "direction": "none",
      "enable": true,
      "outModes": {
        "default": "bounce"
      },
      "random": true,
      "speed": 1,
      "straight": false
    },
    number: {
      density: {
        enable: true,
        area: 1000
      },
      limit: 1000,
      value: 100
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.1,
        speed: 1,
        sync: false
      },
      random: {
        enable: true,
        minimumValue: 0.05
      },
      value: 1
    },
    shape: {
      type: "star"
    },
    size: {
      randmon: {
        enable: true,
        minimumValue: 0.5,
        value: 1
      }
    }
  }
}