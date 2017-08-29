var gulp = require('gulp');
var clean = require('gulp-clean');
var stylus = require('gulp-stylus');

var bases = {
    app: 'src/',
    dist: 'dist/',
    vendors: 'dist/vendors/',
    css: 'dist/css/'
};

gulp.task('clean', function() {
    gulp.src(bases.css).pipe(clean());
    return gulp.src(bases.vendors).pipe(clean());
});

gulp.task('copy', ['clean'], function() {
    gulp.src(
        ['material.js','material.css'],
        {cwd: 'node_modules/material-design-lite/dist'}
    ).pipe(gulp.dest(bases.vendors));

    gulp.src(
        ['vue.js'],
        {cwd: 'node_modules/vue/dist'}
    ).pipe(gulp.dest(bases.vendors));

    gulp.src(['main.styl'], {cwd: bases.app})
    .pipe(stylus())
    .pipe(gulp.dest(bases.css));

    return gulp.src(
        ['vue-router.js'],
        {cwd: 'node_modules/vue-router/dist'}
    ).pipe(gulp.dest(bases.vendors));
;})


gulp.task('default', ['copy']);
