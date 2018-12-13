[
  {
    "name": "client",
    "context": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fsrc",
    "mode": "development",
    "output": {
      "path": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fbuild\u002Fpublic\u002Fassets",
      "publicPath": "\u002Fassets\u002F",
      "pathinfo": false,
      "filename": "[name].js?[chunkhash]",
      "chunkFilename": "module_[name].js?[chunkhash]",
      "devtoolModuleFilenameTemplate": function devtoolModuleFilenameTemplate(info) {
          return _path.default.resolve(info.absoluteResourcePath).replace(/\\/g, '/');
        }
    },
    "resolve": {
      "alias": {
        "~": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fsrc",
        "lsk-general": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fsrc",
        "react": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Freact",
        "react-dom": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Freact-dom"
      },
      "extensions": [
        ".webpack.js",
        ".web.js",
        ".js",
        ".jsx",
        ".json"
      ],
      "modules": [
        "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fsrc",
        "node_modules"
      ]
    },
    "entry": {
      "client": [
        "@babel\u002Fpolyfill",
        ".\u002Fclient.js"
      ]
    },
    "target": "web",
    "module": {
      "strictExportPresence": true,
      "rules": [
        {
          "test": /\.(js|jsx|mjs)$/,
          "include": [
            "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fsrc"
          ],
          "loader": "babel-loader",
          "options": {
            "cacheDirectory": true,
            "babelrc": false,
            "presets": [
              "@babel\u002Fpreset-env",
              "@babel\u002Fpreset-stage-0",
              "@babel\u002Fpreset-react"
            ],
            "plugins": [
              "module:jsx-control-statements",
              "@babel\u002Fplugin-proposal-decorators",
              [
                "@babel\u002Fplugin-proposal-class-properties",
                {
                  "loose": true
                }
              ],
              [
                "@babel\u002Fplugin-transform-runtime",
                {
                  "polyfill": false
                }
              ],
              [
                "emotion",
                {
                  "sourceMap": true,
                  "autoLabel": true
                }
              ]
            ]
          }
        },
        {
          "test": /\.g(lobal)?\.css$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
              "options": {
                "omit": 0,
                "remove": true
              }
            },
            {
              "loader": "css-loader",
              "options": {
                "sourceMap": false,
                "modules": false,
                "minimize": false,
                "localIdentName": "[name]-[local]-[hash:base64:5]"
              }
            },
            {
              "loader": "postcss-loader",
              "options": {
                "plugins": function getPostcssModule(bundle) {
        return _this2.getPostcssModule(bundle);
      }
              }
            }
          ]
        },
        {
          "test": /\.css$/,
          "exclude": /\.g(lobal)?\.css$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
              "options": {
                "omit": 0,
                "remove": true
              }
            },
            {
              "loader": "css-loader",
              "options": {
                "sourceMap": false,
                "modules": true,
                "localIdentName": "[name]-[local]-[hash:base64:5]",
                "minimize": false
              }
            },
            {
              "loader": "postcss-loader",
              "options": {
                "plugins": function getPostcssModule(bundle) {
        return _this2.getPostcssModule(bundle);
      }
              }
            }
          ]
        },
        {
          "test": /\.g(lobal)?\.scss$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
              "options": {
                "omit": 0,
                "remove": true
              }
            },
            {
              "loader": "css-loader",
              "options": {
                "sourceMap": false,
                "modules": false,
                "localIdentName": "[name]-[local]-[hash:base64:5]",
                "minimize": false
              }
            },
            {
              "loader": "postcss-loader",
              "options": {
                "plugins": function getPostcssModule(bundle) {
        return _this2.getPostcssModule(bundle);
      }
              }
            },
            {
              "loader": "sass-loader"
            }
          ]
        },
        {
          "test": /\.scss$/,
          "exclude": /\.g(lobal)?\.scss$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
              "options": {
                "omit": 0,
                "remove": true
              }
            },
            {
              "loader": "css-loader",
              "options": {
                "sourceMap": false,
                "modules": true,
                "localIdentName": "[name]-[local]-[hash:base64:5]",
                "minimize": false
              }
            },
            {
              "loader": "postcss-loader",
              "options": {
                "plugins": function getPostcssModule(bundle) {
        return _this2.getPostcssModule(bundle);
      }
              }
            },
            {
              "loader": "sass-loader"
            }
          ]
        },
        {
          "test": /\.(bmp|gif|jpg|jpeg|png|svg)$/,
          "use": {
            "loader": "url-loader",
            "options": {
              "name": "[path][name].[ext]?[hash]",
              "limit": 8192
            }
          }
        },
        {
          "test": /\.(woff(2)?)(\?.+)?$/,
          "use": {
            "loader": "url-loader",
            "options": {
              "name": "[path][name].[ext]?[hash]",
              "mimetype": "application\u002Ffont-woff",
              "limit": 8192,
              "emitFile": true
            }
          }
        },
        {
          "test": /\.(eot|ttf|wav|mp3)(\?.+)?$/,
          "use": {
            "loader": "file-loader",
            "options": {
              "name": "[path][name].[ext]?[hash]",
              "emitFile": true
            }
          }
        }
      ]
    },
    "plugins": [
      {
        "options": {
          "test": {
            "test": () => true
          }
        }
      },
      {
        "definitions": {
          "process.env.NODE_ENV": "\"development\"",
          "__ENV__": "\"development\"",
          "__DEV__": true,
          "__PROD__": false,
          "__STAGE__": "\"development\"",
          "__SERVER__": false,
          "__CLIENT__": true,
          "__WIDGET__": false
        }
      },
      {
        "filename": "[name].css?[chunkhash]",
        "id": 1,
        "options": {}
      },
      {
        "definitions": {
          "Promise": "bluebird"
        }
      },
      {
        "options": {
          "filename": "assets.js",
          "prettyPrint": false,
          "update": false,
          "fullPath": true,
          "manifestFirst": true,
          "useCompilerPath": false,
          "fileTypes": [
            "js",
            "css"
          ],
          "includeAllFileTypes": true,
          "keepInMemory": false,
          "path": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fbuild",
          "processOutput": function processOutput(x) {
          return "module.exports = ".concat(JSON.stringify(x), ";");
        }
        },
        "writer": function queuedWriter(fs, data, callback) {
    var empty = !queue.length;
    queue.push({ fs: fs, data: data, callback: callback });

    if (empty) {
      // start processing
      processor(fs, data, iterator(callback));
    }
  }
      },
      {}
    ],
    "cache": true,
    "bail": false,
    "stats": {
      "cached": false,
      "cachedAssets": false,
      "chunks": false,
      "chunkModules": false,
      "colors": true,
      "hash": false,
      "modules": false,
      "reasons": true,
      "timings": true,
      "version": false
    },
    "devtool": "cheap-module-eval-source-map"
  },
  {
    "name": "server",
    "context": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fsrc",
    "mode": "development",
    "output": {
      "path": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fbuild",
      "publicPath": "\u002Fassets\u002F",
      "pathinfo": false,
      "filename": "server.js",
      "chunkFilename": "chunks\u002F[name].js",
      "devtoolModuleFilenameTemplate": function devtoolModuleFilenameTemplate(info) {
          return _path.default.resolve(info.absoluteResourcePath).replace(/\\/g, '/');
        },
      "libraryTarget": "commonjs2"
    },
    "resolve": {
      "alias": {
        "~": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fsrc",
        "lsk-general": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fsrc",
        "react": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Freact",
        "react-dom": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Freact-dom"
      },
      "extensions": [
        ".webpack.js",
        ".web.js",
        ".js",
        ".jsx",
        ".json"
      ],
      "modules": [
        "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fsrc",
        "node_modules"
      ]
    },
    "entry": {
      "server": [
        ".\u002Fserver.js"
      ]
    },
    "target": "node",
    "module": {
      "strictExportPresence": true,
      "rules": [
        {
          "test": /\.(js|jsx|mjs)$/,
          "include": [
            "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fsrc"
          ],
          "loader": "babel-loader",
          "options": {
            "cacheDirectory": true,
            "babelrc": false,
            "presets": [
              "@babel\u002Fpreset-env",
              "@babel\u002Fpreset-stage-0",
              "@babel\u002Fpreset-react"
            ],
            "plugins": [
              "module:jsx-control-statements",
              "@babel\u002Fplugin-proposal-decorators",
              [
                "@babel\u002Fplugin-proposal-class-properties",
                {
                  "loose": true
                }
              ],
              [
                "@babel\u002Fplugin-transform-runtime",
                {
                  "polyfill": false
                }
              ],
              [
                "emotion",
                {
                  "sourceMap": true,
                  "autoLabel": true
                }
              ]
            ]
          }
        },
        {
          "test": /\.g(lobal)?\.css$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
              "options": {
                "omit": 0,
                "remove": true
              }
            },
            {
              "loader": "css-loader",
              "options": {
                "sourceMap": false,
                "modules": false,
                "minimize": false,
                "localIdentName": "[name]-[local]-[hash:base64:5]"
              }
            },
            {
              "loader": "postcss-loader",
              "options": {
                "plugins": function getPostcssModule(bundle) {
        return _this2.getPostcssModule(bundle);
      }
              }
            }
          ]
        },
        {
          "test": /\.css$/,
          "exclude": /\.g(lobal)?\.css$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
              "options": {
                "omit": 0,
                "remove": true
              }
            },
            {
              "loader": "css-loader",
              "options": {
                "sourceMap": false,
                "modules": true,
                "localIdentName": "[name]-[local]-[hash:base64:5]",
                "minimize": false
              }
            },
            {
              "loader": "postcss-loader",
              "options": {
                "plugins": function getPostcssModule(bundle) {
        return _this2.getPostcssModule(bundle);
      }
              }
            }
          ]
        },
        {
          "test": /\.g(lobal)?\.scss$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
              "options": {
                "omit": 0,
                "remove": true
              }
            },
            {
              "loader": "css-loader",
              "options": {
                "sourceMap": false,
                "modules": false,
                "localIdentName": "[name]-[local]-[hash:base64:5]",
                "minimize": false
              }
            },
            {
              "loader": "postcss-loader",
              "options": {
                "plugins": function getPostcssModule(bundle) {
        return _this2.getPostcssModule(bundle);
      }
              }
            },
            {
              "loader": "sass-loader"
            }
          ]
        },
        {
          "test": /\.scss$/,
          "exclude": /\.g(lobal)?\.scss$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fyukioru\u002FProjects\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
              "options": {
                "omit": 0,
                "remove": true
              }
            },
            {
              "loader": "css-loader",
              "options": {
                "sourceMap": false,
                "modules": true,
                "localIdentName": "[name]-[local]-[hash:base64:5]",
                "minimize": false
              }
            },
            {
              "loader": "postcss-loader",
              "options": {
                "plugins": function getPostcssModule(bundle) {
        return _this2.getPostcssModule(bundle);
      }
              }
            },
            {
              "loader": "sass-loader"
            }
          ]
        },
        {
          "test": /\.(bmp|gif|jpg|jpeg|png|svg)$/,
          "use": {
            "loader": "url-loader",
            "options": {
              "name": "[path][name].[ext]?[hash]",
              "limit": 8192
            }
          }
        },
        {
          "test": /\.(woff(2)?)(\?.+)?$/,
          "use": {
            "loader": "url-loader",
            "options": {
              "name": "[path][name].[ext]?[hash]",
              "mimetype": "application\u002Ffont-woff",
              "limit": 8192,
              "emitFile": false
            }
          }
        },
        {
          "test": /\.(eot|ttf|wav|mp3)(\?.+)?$/,
          "use": {
            "loader": "file-loader",
            "options": {
              "name": "[path][name].[ext]?[hash]",
              "emitFile": false
            }
          }
        }
      ]
    },
    "plugins": [
      {
        "options": {
          "test": {
            "test": () => true
          }
        }
      },
      {
        "definitions": {
          "process.env.NODE_ENV": "\"development\"",
          "__ENV__": "\"development\"",
          "__DEV__": true,
          "__PROD__": false,
          "__STAGE__": "\"development\"",
          "__SERVER__": true,
          "__CLIENT__": false,
          "__WIDGET__": false
        }
      },
      {
        "filename": "[name].css?[chunkhash]",
        "id": 2,
        "options": {}
      },
      {
        "definitions": {
          "Promise": "bluebird"
        }
      },
      {
        "options": {
          "banner": "require(\"source-map-support\").install();",
          "raw": true,
          "entryOnly": false
        },
        "banner": () => banner
      }
    ],
    "cache": true,
    "bail": false,
    "stats": {
      "cached": false,
      "cachedAssets": false,
      "chunks": false,
      "chunkModules": false,
      "colors": true,
      "hash": false,
      "modules": false,
      "reasons": true,
      "timings": true,
      "version": false
    },
    "externals": [
      ".\u002Fchunk-manifest.json",
      ".\u002Fasset-manifest.json",
      ".\u002Fassets",
      function (context, request, callback){
        var moduleName = getModuleName(request, includeAbsolutePaths);
        if (utils.contains(nodeModules, moduleName) && !utils.containsPattern(whitelist, request)) {
            if (typeof importType === 'function') {
                return callback(null, importType(request));
            }
            // mark this module as external
            // https://webpack.js.org/configuration/externals/
            return callback(null, importType + " " + request);
        };
        callback();
    }
    ],
    "node": {
      "console": false,
      "global": false,
      "process": false,
      "Buffer": false,
      "__filename": false,
      "__dirname": false
    },
    "devtool": "inline-source-map"
  }
]