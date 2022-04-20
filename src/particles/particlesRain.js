export default {
    fullScreen: {
      enable: false
    },
    detectRetina: true,
    background: {
      color: "#252934"
    },
    fpsLimit: 90,
    emitters: {
      direction: "bottom",
      life: {
        count: 0,
        duration: 0.01,
        delay: 0.1
      },
      rate: {
        delay: 0.01,
        quantity: 1
      },
      size: {
        width: 80,
        height: 0
      },
    },
    particles: {
      color: { value: "#fff" },
      number: { density: { enable: true, area: 800 }, value: 100, limit: 1000 },
      opacity: {
        random: true,
        value: 0.5
      },
      life: {
        count: 0
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          sync: true,
          speed: 0.8,
          startValue: "max",
          destroy: "min"
        }
      },
      stroke: {
        color: {
          value: "#ffffff"
        },
        width: 1
      },
      rotate: {
        path: true,
        value: 180
      },
      move: {
        straight: true,
        enable: true,
        speed: { min: 2, max: 10 },
        outModes: {
          default: "destroy",
          bottom: "none"
        },
        trail: {
          fillColor: "#252934",
          enable: true,
          length: 3
        }
      }
    }
  }