const { series,parallel, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const {cssTask} = require('./cssTask');
const {jsTask} = require('./jsTask');




const serv = () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
};

const watcher = () =>{
  watch('index.html').on('change', browserSync.reload);
  watch('src/scripts/**/*.js').on('change',series (jsTask,browserSync.reload));
  watch('src/scss/**/*.scss').on('change',series (cssTask, browserSync.reload));
}

/*

* dev
*
* сборка приложения
*
* @task clean             - очистка папки dist;
* @task compileScss       - компиляция scss файлов в css;
*
*/

const dev = parallel(
  serv,
  watcher
)


module.exports = {
  dev
}