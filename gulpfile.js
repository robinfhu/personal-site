var gulp = require('gulp');
var clean = require('gulp-clean');

var bases = {
    app: 'src/',
    dist: 'dist/',
    vendors: 'dist/vendors/'
};

gulp.task('clean', function() {
    return gulp.src(bases.dist).pipe(clean());
});

gulp.task('copy', ['clean'], function() {
    gulp.src(['index.html'], {cwd: bases.app})
    .pipe(gulp.dest(bases.dist));

    gulp.src(
        ['material.js','material.css'],
        {cwd: 'node_modules/material-design-lite/dist'}
    ).pipe(gulp.dest(bases.vendors));

    gulp.src(
        ['vue.js'],
        {cwd: 'node_modules/vue/dist'}
    ).pipe(gulp.dest(bases.vendors));

    gulp.src(
        ['vue-router.js'],
        {cwd: 'node_modules/vue-router/dist'}
    ).pipe(gulp.dest(bases.vendors));
;})

gulp.task('default', ['copy']);