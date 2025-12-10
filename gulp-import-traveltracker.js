// GULP
const gulp = require('gulp');

// MODULES
const { deleteAsync } = require('del');

// FILE LOCATIONS
const build = '../traveltracker-web/dist/traveltracker-web/browser/**/*';
const portfolio = 'portfolio/traveltracker/';

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
