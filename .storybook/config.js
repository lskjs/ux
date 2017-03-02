import { config } from 'storybox';
config({
  options: {
    name: 'lsk-general',
  },
  modules: require('glob!./glob.txt'),
});
