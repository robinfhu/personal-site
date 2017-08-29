var gulp = require('gulp');
var clean = require('gulp-clean');
var stylus = require('gulp-stylus');
var babel = require('gulp-babel');

var bases = {
    app: 'src/',
    dist: 'dist/',
    vendors: 'dist/vendors/',
    css: 'dist/css/',
    js: 'dist/js/'
};

gulp.task('clean', function() {
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

    gulp.src(
        ['vue-router.js'],
        {cwd: 'node_modules/vue-router/dist'}
    ).pipe(gulp.dest(bases.vendors));
});

gulp.task('css', function() {
    gulp.src(['main.styl'], {cwd: bases.app})
    .pipe(stylus())
    .pipe(gulp.dest(bases.css));
});

gulp.task('js', function() {
    gulp.src(['js/*.js'], {cwd: bases.app})
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest(bases.js));
});


gulp.task('default', ['copy', 'css']);
