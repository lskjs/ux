const json = require(process.cwd() + '/package.json');
const baseJson = require(__dirname + '/package.json');



const newJson = {
  ...baseJson,
  ...json,
  scripts: {
    ...(baseJson.scripts || {}),
    ...(baseJson.scripts || {}),
  },
};

require('fs').writeFileSync('./package.json', JSON.stringify(newJson, null, 2));
