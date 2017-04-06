import { config } from 'storybox';
config({
  options: {
    name: 'lsk-general',
  },
  backgrounds: null,
  knob: true,
  modules: require('glob!./glob.txt'),
});
