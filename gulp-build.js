// GULP
import gulp from 'gulp';

// MODULES
import useref from 'gulp-useref';
import gulpif from 'gulp-if';
import jsMinify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

// FILE LOCATIONS
const sourceDir = 'index-staging';
const destDir = 'index';

//----------
// TASKS
//----------

// PARSE HTML, MINIFY, AND COPY TO NEW LOCATION
gulp.task('html', () => {
  return gulp
    .src(`${sourceDir}.html`)
    .pipe(useref())
    .pipe(gulpif(['js/*.js', 'js/**/*.js'], jsMinify()))
    .pipe(gulpif('css/*.css', cleanCSS()))
    .pipe(gulpif(`${sourceDir}.html`, rename(`${destDir}.html`)))
    .pipe(
      gulp.dest((file) => {
        return file.base;
      })
    );
});

// RUN TASKS
gulp.task(
  'default',
  gulp.series(['html'], (done) => {
    done();
  })
);
