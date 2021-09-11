const del = require('del');

const clean = () => del(['dist/'], { force: true });

module.exports = {
  clean
}