var gulp = require('gulp'),
  spsave = require('gulp-spsave'),
  notify = require('gulp-notify');

// External credentials file.
var creds = require('./credentials');

gulp.task('default', function() {
  gulp.watch('build/**/*', function(obj) {
    console.log(obj.type, obj);
    if (obj.type === 'changed' || obj.type === 'added') {
      gulp
        .src(obj.path, {
          base: 'src'
        })
        .pipe(spsave(creds.coreOptions, creds))
        .pipe(notify({ title: 'Uploaded: <%= file.relative %>' }));
    }
  });
});

gulp.task('upload', function() {
  gulp
    .src('build/**/*', function(obj) {})
    .pipe(spsave(creds.coreOptions, creds))
    .pipe(notify({ title: 'Uploaded: <%= file.relative %>' }));
});
