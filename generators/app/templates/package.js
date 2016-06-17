{
  "private": true,
  "name": "<%= name %>",
  "description": "<%= description %>",
  "license": "MIT",
  "version": "0.0.1",
  "engines": {
    "node": ">=0.10.33"
  },
  "scripts": {
    "build": "tarima -fdV",
    "lint": "eslint *.js src bin config models controllers middlewares",
    "repl": "node bin/repl.js",
    "start": "node bin/server.js",
    "watch": "tarima -wdVP localhost:3000"
  },
  "tarima": {
    "bundle": true,
    "src": "src/**/*",
    "dest": "./public/build",
    "ignoreFiles": [
      ".gitignore"
    ],
    "filter": [
      "**/_entries/**"
    ],
    "rename": "**:{filepath/1/_entries}/{filename}.{extname}",
    "bundleOptions": {
      "extensions": {
        "js": "es6",
        "css": "post"
      },
      "rollup": {
        "format": "iife",
        "plugins": [
          "rollup-plugin-buble"
        ]
      },
      "postcss": {
        "plugins": [
          "postcss-import",
          "postcss-cssnext"
        ]
      }
    }
  }
}
