const gulp = require('gulp');
const electron = require('electron-connect').server.create();
const path = require('path');

gulp.task('default', () => {
  // Start browser process
  electron.start('--enable-logging');
  // Restart browser process
  gulp.watch('public/dist/bundle.js', electron.restart);
  // Reload renderer process
  gulp.watch(path.join(__dirname, '*'), electron.reload);
});
