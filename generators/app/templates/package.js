{
  "name": "<%= name %>",
  "description": "<%= description %>",
  "repository": "",
  "version": "0.0.1",
  "keywords": [

  ],
  "engines": {
    "node": ">=0.10.33"
  },
  "scripts": {
    "start": "node bin/server.js",
    "build": "tarima -fdV",
    "watch": "tarima -wdVP localhost:3000"
  },
  "dependencies": {}
}
