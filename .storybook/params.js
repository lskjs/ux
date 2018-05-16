import React from 'react';
// require('/Users/isuvorov/projects/lskjs/lsk-general/src/Test.story');
// require('lsk-general/General/Test.story')
// require('../asdsrc/Test.story')
// require('../asdsrc/Test.story')
// require('~/Test.story')

export default {
  modules: require('./stories').default,
  options: {
    name: 'lsk-general',
  },
  info: false,
  knob: true,
  utils: {},
};
