'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-neonode:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      // .withOptions()
      .withPrompts({projectName: 'test app'})
      .on('end', done);
  });

  it('Creates skeleon files', function () {
    assert.file([
      'bin',
      'bin/server.js',
      'config',
      'config/config.js',
      'config/middlewares.js',
      'config/RouteMappings.js',
      'controllers',
      'controllers/HomeController.js',
      'knexfile.js',
      'lib',
      'lib/boot.js',
      'lib/core',
      'lib/core/bootstrap.js',
      'lib/core/controllers',
      'lib/core/controllers/BaseController.js',
      'lib/core/controllers/RestfulController.js',
      'lib/core/index.js',
      'lib/core/logger.js',
      'lib/core/Neonode.js',
      'lib/core/vendor',
      'lib/core/vendor/lithium.js',
      'lib/LithiumEngine.js',
      'LICENSE',
      'middlewares',
      'middlewares/bodyParserJSON.js',
      'middlewares/bodyParserURL.js',
      'middlewares/cookieParser.js',
      'middlewares/cors.js',
      'middlewares/CSRF.js',
      'middlewares/CSRFError.js',
      'middlewares/Error.js',
      'middlewares/flashMessages.js',
      'middlewares/locals.js',
      'middlewares/MethodOverride.js',
      'middlewares/NotFound.js',
      'middlewares/redis.js',
      'middlewares/Router.js',
      'models',
      'package.json',
      'public',
      'public/css',
      'public/css/style.css',
      'public/css/vendor',
      'public/css/vendor/elastic.css',
      'public/css/vendor/elastic.print.css',
      'public/img',
      'public/img/favicon.gif',
      'public/img/neon-logo.png',
      'public/js',
      'public/js/application.js',
      'public/js/vendor',
      'public/js/vendor/elastic.js',
      'public/js/vendor/jquery-2.0.3.js',
      'public/js/vendor/Widget.js',
      'views',
      'views/home',
      'views/home/index.html',
      'views/layouts',
      'views/layouts/application.html',
      'views/shared',
      'views/shared/403.html',
      'views/shared/404.html',
      'views/shared/500.html',
      'webpack.config.js'
    ]);
  });
});
