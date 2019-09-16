const Promise = require('bluebird');
const glob = require('glob-promise');
const flattenDeep = require('lodash/flattenDeep');

const NODE_MODULES_PREFIX = '../../node_modules/';
const packages = [
  '@lskjs/button',
  '@lskjs/downloads',
  '@lskjs/form',
  '@lskjs/list',
  '@lskjs/modal',
  '@lskjs/scroll',
  '@lskjs/ui',
];

const walk = async (src) => {
  const paths = await glob(`${src}/**/*.story.js`);
  return paths;
};

export default async function getDirs() {
  const dirs = await Promise.map(packages, pkg => (
    walk(`${NODE_MODULES_PREFIX}${pkg}`)
  ));
  let arr = flattenDeep(dirs);
  arr = arr.map(e => e.split(NODE_MODULES_PREFIX)[1]);
  return arr;
}
