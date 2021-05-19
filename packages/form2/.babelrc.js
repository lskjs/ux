module.exports = {
  presets: [
    '@lskjs/babel-preset'
  ],
  "plugins": [
    [
      "@emotion",
      {
        "sourceMap": true,
        "autoLabel": 'dev-only',
        "labelFormat": "[filename]--[local]",
        "cssPropOptimization": true
      },
    ],
  ],
};
