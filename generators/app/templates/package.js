{
  "name": "<%= name %>",
  "description": "<%= description %>",
  "license": "MIT",
  "version": "0.0.1",
  "engines": {
    "node": ">=0.10.33"
  },
  "scripts": {
    "start": "node bin/server.js",
    "build": "tarima -fdV",
    "watch": "tarima -wdVP localhost:3000"
  },
  "tarima": {
    "bundle": true,
    "rollupFile": "./rollup.config.js",
    "src": "src/**/*",
    "dest": "./public/build",
    "ignoreFiles": [".gitignore"],
    "filter": ["**/_entries/**"],
    "rename": "**:{filepath/1/_entries}/{filename}.{extname}",
    "bundleOptions": {
      "extensions": {
        "js": "es6",
        "css": "post"
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
