const { series, parallel } = require('gulp');

const { clean } = require('./clean');
// const { scssCompile } = require('./scssCompile');
const { cssTask } = require('./cssTask');
const { jsTask } = require('./jsTask');
const { imgTask } = require('./imgTask');
/*
* 
* @task build                - сборка приложения
*
* @subtask clean             - очистка папки dist;
* @subtask scssCompile       - компиляция scss файлов в css;
* @subtask cssVendor         - добавление вендорных префиксов к CSS свойствам для 
                               поддержки последних нескольких версий каждого из браузеров;
* @subtask cssPurge          - удаление неиспользуемого css-кода;
* @subtask сssBundle         - конкатенация всех css файлов в один styles.css;
* @subtask cssMinify         - минификация styles.css в styles.min.css ;
* @subtask jsBundle          - конкатенация всех js файлов в один scripts.js;
* @subtask jsMinify          - минификация scripts.js в scripts.min.js ;
* @subtask imgMinify       - оптимизация картинок
* @subtask publish           - копирование styles.min.css, scripts.min.js и картинок
*                              в папку dist;
*
*/
const build = series(
  clean,
  parallel(cssTask, jsTask, imgTask)
)


module.exports = {
  build
}