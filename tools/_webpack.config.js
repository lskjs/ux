[
  {
    "name": "client",
    "mode": "development",
    "context": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fsrc",
    "target": "web",
    "entry": [
      ".\u002Fclient.js"
    ],
    "resolve": {
      "alias": {
        "~": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fsrc",
        "lsk-general": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fsrc",
        "react": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Freact",
        "react-dom": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Freact-dom"
      },
      "extensions": [
        ".webpack.js",
        ".web.js",
        ".js",
        ".jsx",
        ".json"
      ],
      "modules": [
        "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fsrc",
        "node_modules"
      ]
    },
    "output": {
      "path": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fbuild\u002Fpublic\u002Fassets",
      "publicPath": "\u002Fassets\u002F",
      "pathinfo": false,
      "devtoolModuleFilenameTemplate": function devtoolModuleFilenameTemplate(info) {
          return _path.default.resolve(info.absoluteResourcePath).replace(/\\/g, '/');
        },
      "filename": "[name].js?[chunkhash]",
      "chunkFilename": "module_[name].js?[chunkhash]"
    },
    "module": {
      "strictExportPresence": true,
      "rules": [
        {
          "test": /\.(jsx|js)?$/,
          "include": [
            "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fsrc"
          ],
          "use": {
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
                ]
              ]
            }
          }
        },
        {
          "test": /\.g(lobal)?\.css$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
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
          "test": /\.css$/,
          "exclude": /\.g(lobal)?\.css$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
              "options": {
                "omit": 0,
                "remove": true
              }
            },
            {
              "loader": "css-loader",
              "options": {
                "sourceMap": true,
                "modules": true,
                "localIdentName": "[name]_[local]_[hash:base64:3]",
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
              "loader": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
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
              "loader": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
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
                "localIdentName": "[name]_[local]_[hash:base64:3]",
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
          "test": /\.(png|jpg|jpeg|gif|svg)(\?.+)?$/,
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
              "limit": 8192
            }
          }
        },
        {
          "test": /\.(eot|ttf|wav|mp3)(\?.+)?$/,
          "use": {
            "loader": "file-loader",
            "options": {
              "name": "[path][name].[ext]?[hash]"
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
          "path": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fbuild",
          "filename": "assets.js",
          "prettyPrint": false,
          "update": false,
          "fullPath": true,
          "processOutput": function processOutput(x) {
          return "module.exports = ".concat(JSON.stringify(x), ";");
        }
        },
        "writer": function queuedWriter(data, callback) {
    var empty = !queue.length
    queue.push({data: data, callback: callback})

    if (empty) {
            // start processing
      processor(data, iterator(callback))
    }
  }
      }
    ],
    "cache": true,
    "bail": false,
    "stats": {
      "colors": true,
      "reasons": true,
      "hash": false,
      "version": false,
      "timings": true,
      "chunks": false,
      "chunkModules": false,
      "cached": false,
      "cachedAssets": false,
      "modules": false
    },
    "devtool": "eval"
  },
  {
    "name": "server",
    "mode": "development",
    "context": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fsrc",
    "target": "node",
    "entry": [
      ".\u002Fserver.js"
    ],
    "resolve": {
      "alias": {
        "~": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fsrc",
        "lsk-general": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fsrc",
        "react": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Freact",
        "react-dom": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Freact-dom"
      },
      "extensions": [
        ".webpack.js",
        ".web.js",
        ".js",
        ".jsx",
        ".json"
      ],
      "modules": [
        "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fsrc",
        "node_modules"
      ]
    },
    "output": {
      "path": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fbuild\u002Fpublic\u002Fassets",
      "publicPath": "\u002Fassets\u002F",
      "pathinfo": false,
      "devtoolModuleFilenameTemplate": function devtoolModuleFilenameTemplate(info) {
          return _path.default.resolve(info.absoluteResourcePath).replace(/\\/g, '/');
        },
      "filename": "..\u002F..\u002Fserver.js",
      "libraryTarget": "commonjs2"
    },
    "module": {
      "strictExportPresence": true,
      "rules": [
        {
          "test": /\.(jsx|js)?$/,
          "include": [
            "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fsrc"
          ],
          "use": {
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
                ]
              ]
            }
          }
        },
        {
          "test": /\.g(lobal)?\.css$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
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
          "test": /\.css$/,
          "exclude": /\.g(lobal)?\.css$/,
          "loader": [
            {
              "loader": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
              "options": {
                "omit": 0,
                "remove": true
              }
            },
            {
              "loader": "css-loader",
              "options": {
                "sourceMap": true,
                "modules": true,
                "localIdentName": "[name]_[local]_[hash:base64:3]",
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
              "loader": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
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
              "loader": "\u002FUsers\u002Fisuvorov\u002Fprojects\u002Flskjs\u002Flsk-general\u002Fnode_modules\u002Fextract-text-webpack-plugin\u002Fdist\u002Floader.js",
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
                "localIdentName": "[name]_[local]_[hash:base64:3]",
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
          "test": /\.(png|jpg|jpeg|gif|svg)(\?.+)?$/,
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
              "limit": 8192
            }
          }
        },
        {
          "test": /\.(eot|ttf|wav|mp3)(\?.+)?$/,
          "use": {
            "loader": "file-loader",
            "options": {
              "name": "[path][name].[ext]?[hash]"
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
        "banner": "require(\"source-map-support\").install();"
      },
      {
        "options": {
          "maxChunks": 1
        }
      }
    ],
    "cache": true,
    "bail": false,
    "stats": {
      "colors": true,
      "reasons": true,
      "hash": false,
      "version": false,
      "timings": true,
      "chunks": false,
      "chunkModules": false,
      "cached": false,
      "cachedAssets": false,
      "modules": false
    },
    "externals": [
      /^\.\/assets$/,
      function (context, request, callback) {
          var depsStr = _this2.getDeps().map(function (dep) {
            return dep.name;
          }).filter(function (a) {
            return a;
          }).join('|');

          var isExternal = request.match(/^[@a-z][a-z\/\.\-0-9]*$/i) && !request.match(/\.(css|less|scss|sss)$/i) && (!depsStr || !request.match(new RegExp("^(".concat(depsStr, ")")))); // console.log('==================');
          // console.log(depsStr);
          // console.log(request.match(/^[@a-z][a-z\/\.\-0-9]*$/i), !!request.match(/^[@a-z][a-z\/\.\-0-9]*$/i));
          // console.log(request.match(/\.(css|less|scss|sss)$/i), !request.match(/\.(css|less|scss|sss)$/i));
          // console.log(request.match(new RegExp(`^(${depsStr})`)), !request.match(new RegExp(`^(${depsStr})`)));
          // !Boolean(isExternal) && console.log('!!!!!!!!!!!!ext', request, !request.match(new RegExp(`^(${depsStr})`)), Boolean(isExternal));
          // console.log('==================');

          callback(null, Boolean(isExternal));
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
    "devtool": "source-map"
  }
]