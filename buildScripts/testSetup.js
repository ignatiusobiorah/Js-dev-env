// This file isn't transpilled so must use common Js and ES5

// Register babel to transpile before our script runs.
require('babel-register')();

// Disable webpack features that Mocha dosent understand.
require.extensions['.css'] = function() {};
