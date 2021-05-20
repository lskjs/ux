module.exports = {
  presets: [
    '@lskjs/babel-preset'
  ],
  "plugins": [
    [
      "emotion",
      {
        "sourceMap": true,
        "autoLabel": process.env.NODE_ENV !== 'production',
        "labelFormat": "[filename]--[local]",
        "cssPropOptimization": true
      },
    ],
  ],
};
