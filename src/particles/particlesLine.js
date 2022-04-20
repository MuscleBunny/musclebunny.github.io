export default {
  fullScreen: {
    enable: false
  },
  "background": {
    "color": {
      "value": "#252934"
    }
  },
  "fpsLimit": 120,
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "push": {
        "quantity": 4
      },
      "repulse": {
        "distance": 100,
        "duration": 0.0
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "links": {
      "color": "#ffffff",
      "distance": 100,
      "enable": true,
      "opacity": 0.5,
      "width": 1
    },
    "collisions": {
      "enable": true
    },
    "move": {
      "direction": "none",
      "enable": true,
      "outModes": {
        "default": "bounce"
      },
      "random": false,
      "speed": 1,
      "straight": false
    },
    "number": {
      "density": {
        "enable": true,
        "value_area": 800
      },
      "value": 150
    },
    "opacity": {
      "value": 0.8
    },
    "shape": {
      "type": "circle"
    },
    "size": {
      "value": 2
    }
  },
  "detectRetina": true
}
