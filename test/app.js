'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-neonode:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({projectName: 'test app'})
      .on('end', done);
  });

  it('Creates skeleon files', function () {
    assert.file([
      '.editorconfig',
      '.eslintrc',
      '.gitignore',
      'bin',
      'bin/server.js',
      'bin/repl.js',
      'config',
      'config/config.sample.js',
      'config/middlewares.js',
      'config/RouteMappings.js',
      'controllers',
      'controllers/HomeController.js',
      'knexfile.sample.js',
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
      'public/images',
      'public/images/favicon.gif',
      'public/images/neonode-logo.svg',
      'src',
      'src/javascripts',
      'src/javascripts/_entries',
      'src/javascripts/_entries/application.js',
      'src/javascripts/modules',
      'src/javascripts/modules/bar.js',
      'src/javascripts/modules/foo.js',
      'src/stylesheets',
      'src/stylesheets/_entries',
      'src/stylesheets/_entries/style.css',
      'views',
      'views/home',
      'views/home/index.html',
      'views/layouts',
      'views/layouts/application.html',
      'views/shared',
      'views/shared/403.html',
      'views/shared/404.html',
      'views/shared/500.html'
    ]);
  });
});
