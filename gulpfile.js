'use strict';

const gulp = require('gulp');
const electron = require('electron-connect').server.create();
const path = require('path');

gulp.task('default', function () {
// Start browser process
  electron.start();
// Restart browser process
  gulp.watch('public/dist/bundle.js', electron.restart);
// Reload renderer process
  gulp.watch(path.join(__dirname, '*'), electron.reload);
});
