import type { ISourceOptions } from '@tsparticles/engine';

// https://github.com/matteobruni/tsparticles/issues/2771
export const options: ISourceOptions = {
  retinaDetect: false,
  fpsLimit: 120,
  fullScreen: {
    enable: true,
  },
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        height: 800,
        width: 800
      },
    },
    color: {
      value: ['c912ed', '00bfff', '22dd22', 'ffd500', 'ff8000', 'ff2600'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.9,
    },
    size: {
      value: {
        min: 2,
        max: 5
      }
    },
    links: {
      enable: true,
      distance: 75,
      color: '999',
      opacity: 0.9,
      width: 1,
      consent: false,
      blink: true,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: true,
      outModes: 'bounce'
    },
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onDiv: [
        {
          enable: true,
          selectors: '.bounce',
          mode: 'bounce',
          type: 'rectangle'
        },
      ],
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'grab',
      },
      resize: {
        enable: true
      }
    },
    modes: {
      attract: {
        distance: 200,
        duration: 1,
        speed: 2,
      },
      bubble: {
        distance: 300,
        size: 20,
        duration: 1,
        opacity: 8,
      },
      grab: {
        distance: 250,
        links: {
          opacity: 0.8,
        },
      },
      push: {
        quantity: 5,
      },
      remove: {
        quantity: 20,
      },
      repulse: {
        distance: 150,
        duration: 2,
      },
      pause: {
        distance: 200,
        duration: 2,
      }
    },
  },
};
