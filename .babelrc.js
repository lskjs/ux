module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-stage-0",
    "@babel/preset-react"
  ],
  "plugins": [
    "module:jsx-control-statements",
    "@babel/plugin-proposal-decorators",
    "@babel/plugin-proposal-optional-chaining",
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-transform-runtime", { "polyfill": false }],
    "emotion",
    // [
    //   "emotion",
    //   {
    //     // sourceMap is on by default but source maps are dead code eliminated in production
    //     "sourceMap": true,
    //     "autoLabel": process.env.NODE_ENV !== 'production',
    //     "labelFormat": "[local]",
    //     "cssPropOptimization": process.env.NODE_ENV === 'production'
    //   }
    // ]
  ]
}
