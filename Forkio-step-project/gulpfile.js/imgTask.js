// const imagemin = require('gulp-imagemin');
const { src, dest } = require('gulp');

const imgTask = () => {
  return src('src/images/*')
    .pipe(dest('dist/images'))
}

module.exports = { imgTask };