const { build } = require('./build');
const { dev } = require('./dev');

exports.build = build;

exports.dev = dev;

exports.default = build;
