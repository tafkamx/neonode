'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');
var mkdirp = require('mkdirp');

function makeGeneratorName(name) {
  name = _.kebabCase(name);
  return name;
}

module.exports = yeoman.Base.extend({
  initializing : function () {
    this.props = {};
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the groovy ' + chalk.red('neonode') + ' generator!'
    ));

    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Whats your project name',
      default: makeGeneratorName(path.basename(process.cwd())),
    }, function(answers) {
      this.props.name = answers.name;

      done();
    }.bind(this));
  },

  default : function() {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        'Your project must be inside a folder named ' + this.props.name + '\n' +
        'I\'ll automatically create this folder.'
      );

      mkdirp(this.props.name);

      this.destinationRoot(this.destinationPath(this.props.name));
    }

    this.composeWith('neonode:core', {
      arguments: [this.destinationPath()]
    }, {
      local: require.resolve('../core')
    });

  },

  writing: function () {
    this.log('Copying files...');

    this.fs.copy(
      this.templatePath('skeleton'),
      this.destinationPath()
    );

    this.fs.copy(
      this.templatePath('../../../.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('../../../.eslintrc'),
      this.destinationPath('.eslintrc')
    );

    this.fs.copy(
      this.templatePath('../../../.gitignore'),
      this.destinationPath('.gitignore')
    );

    mkdirp.sync(path.join(this.destinationPath(), '/models'));

    this.log('Generating package.json...');
    this.fs.copyTpl(
      this.templatePath('package.js'),
      this.destinationPath('package.json'),
      {
        name : _.kebabCase(this.props.name),
        description : ''
      }
    );

    this.log('Generating config/config.js...');
    this.fs.copyTpl(
      this.templatePath('config.js'),
      this.destinationPath('config/config.js'),
      {
        appName : this.props.name
      }
    );
  },

  install: function () {
    this.npmInstall([
      'body-parser',
      'connect-redis',
      'cookie-parser',
      'csurf',
      'express-session',
      'knex',
      'lodash',
      'lodash-inflection',
      'mysql',
      'neon',
      'path',
      'pg',
      'redis',
      'req-flash',
      'method-override',
      'colors',
      'express',
      'glob',
      'krypton-orm',
      'mkdirp',
      'morgan',
      'path',
      'pluralize',
      'rimraf',
      'route-mappings',
      'thulium',
      'thulium-express',
      'winston',
    ], {save : true});

    this.npmInstall([
      'buble',
      'postcss',
      'postcss-cssnext',
      'postcss-import',
      'rollup',
      'rollup-plugin-buble',
      'tarima-browser-sync',
      'tarima-cli'
    ], {'saveDev' : true});
  }
});
