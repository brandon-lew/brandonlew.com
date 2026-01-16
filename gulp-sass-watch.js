// GULP
import gulp from 'gulp';

// MODULES
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

// SOURCE DIRECTORY
const sourceDir = 'sass/';

// DESTINATION DIRECTORY
const destDir = 'css';

//----------
// TASKS
//----------

// COMPILE SASS
gulp.task('compile', () => {
  return gulp
    .src([`${sourceDir}*.{sass,scss}`])
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest(destDir));
});

// SASS WATCH
gulp.task('sass:watch', () => {
  gulp.watch(`${sourceDir}*.{sass,scss}`, gulp.series(['compile']), () => {});
});

// RUN TASKS
gulp.task(
  'default',
  gulp.series(['sass:watch'], () => {})
);
