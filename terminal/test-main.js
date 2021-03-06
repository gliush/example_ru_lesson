_.mixin(_.string.exports());

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start,
  paths: {
    "terminal/setup": "js/terminal/setup",
    "terminal/unique_slug": "js/terminal/unique_slug",
    "terminal/bash_man": "js/terminal/bash_man",
    "terminal/bash_date": "js/terminal/bash_date",
    "terminal/strings": "js/terminal/strings"
  }
});
