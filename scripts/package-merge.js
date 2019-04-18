const baseJson = require('../../scripts/package.json');

const json = require('./package.json');


const newJson = {
  ...baseJson,
  ...json,
  scripts: {
    ...(baseJson.scripts || {}),
    ...(baseJson.scripts || {}),
  },
};

require('fs').writeFileSync('./package.json', JSON.stringify(newJson));
