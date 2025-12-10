// GULP
const gulp = require('gulp');

// MODULES
const { deleteAsync } = require('del');

// FILE LOCATIONS
const build = '../tipjar-web/build/**/*';
const portfolio = 'portfolio/tipjar/';

//----------
// TASKS
//----------

// DELETE PORTFOLIO DIRECTORY
gulp.task('delete', () => {
  return deleteAsync([portfolio], { force: true });
});

// COPY BUILD FILES TO PORTFOLIO DIRECTORY
gulp.task('move', () => {
  return gulp.src([build], { encoding: false }).pipe(gulp.dest(portfolio));
});

gulp.task('default', gulp.series(['delete', 'move']), function () {});
