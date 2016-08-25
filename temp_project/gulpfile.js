var gulp = require('gulp'),
    less = require('gulp-less'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    csso = require('postcss-csso');

var onError = function (err) {
  gutil.log(gutil.colors.red("ERROR", "css"), err);
	this.emit("end", new gutil.PluginError("css", err, { showStack: true }));
};

gulp.task('css', function () {
  return gulp.src('src/style.less')
    .pipe(less().on('error', onError))
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 3 versions', 'ie 9']
      }),
      csso({
        comments: false
      })
    ]))
    .pipe(gulp.dest('css/'));
});
