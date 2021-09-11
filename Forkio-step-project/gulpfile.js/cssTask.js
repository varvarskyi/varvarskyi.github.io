
const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const { init: initSourcemap, write: writeSourcemap } = require('gulp-sourcemaps');
const purgecss = require('gulp-purgecss');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const SCSS_PATH = 'src/scss/**/*.scss';

const cssTask = () =>
  src(SCSS_PATH)
    .pipe(initSourcemap())
    .pipe(sass())
    // .pipe(purgecss({ content: ['src/**/*.html'] })) - recheck after correct html&&scss will be ready
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(writeSourcemap('.'))
    .pipe(dest('dist/styles'));

module.exports = {
  cssTask,
};
