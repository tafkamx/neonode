var buble = require('rollup-plugin-buble');

module.exports = {
  format: 'iife',
  plugins: [buble()]
};
