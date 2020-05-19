const isString = require('lodash/isString');

const isLearnPath = path =>
  isString(path) ? path.match(/^\/learn\/.+$/) : false;

module.exports = isLearnPath;
