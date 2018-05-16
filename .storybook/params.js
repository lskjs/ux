const d = require('glob-loader!./glob.txt');
console.log({d});

export default {
  modules: require('glob-loader!./glob.txt'),
  options: {
    name: 'lsk-general',
  },
  info: false,
  knob: true,
  utils: {},
};
