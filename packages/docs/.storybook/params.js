import contexts from './contexts';

export default {
  modules: contexts.map((req) => req.keys().map(req)),
  options: {
    name: 'Lsk.js',
  },
  knobs: false,
};
