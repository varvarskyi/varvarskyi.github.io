
const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const JS_SRC_PATH = 'src/scripts/**/*.js',
      JS_DIST_PATH = 'dist/scripts';

const jsTask = () =>
  src(JS_SRC_PATH)
    .pipe(concat('scripts.js'))
    .pipe(dest(JS_DIST_PATH))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(dest(JS_DIST_PATH));

module.exports = {
  jsTask,
};
