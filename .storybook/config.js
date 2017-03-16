import { config } from 'storybox';
config({
  options: {
    name: 'lsk-general',
  },
  backgrounds: null,
  modules: require('glob!./glob.txt'),
});
