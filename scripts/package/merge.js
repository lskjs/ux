const omitNull = require('@lskjs/utils/omitNull').default;
const json = require(process.cwd() + '/package.json'); // eslint-disable-line
const baseJson = require(__dirname + '/assets/package-merge.json'); // eslint-disable-line

const newJson = {
  ...baseJson,
  ...json,
  scripts: omitNull({
    ...(json.scripts || {}),
    ...(baseJson.scripts || {}),
  }),
};

require('fs').writeFileSync('./package.json', JSON.stringify(newJson, null, 2));
