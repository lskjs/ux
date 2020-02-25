// eslint-disable-next-line import/no-mutable-exports
let DevTools;
try {
  DevTools = require('mobx-react-devtools').default;
} catch (e) {
  DevTools = () => 'npm i -D mobx-react-devtools';
}

export default DevTools;
