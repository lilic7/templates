var gulp = require("gulp");
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var postcss = require("gulp-postcss");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("autoprefixer");
var pug = require("gulp-pug");

var browserSync = require("browser-sync").create();


function browser_sync() {
    browserSync.init({
        proxy: 'yoga.app',
        files: [
            'public/*.html',
            'public/css/*.css'
        ],
        port: 7000
    });
}

function watch() {
    gulp.watch(["scss/*.scss", "scss/**/*.scss"], Sass);
    gulp.watch("pug/*.pug", renderPUGtoHTML);
    gulp.watch("pug/**/*.pug", renderPUGtoHTML);
}

function renderPUGtoHTML() {
    return gulp.src("pug/*.pug")
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest("public"))
        .pipe(browserSync.stream({once: true}));
}



function Sass(){
    return gulp.src(["scss/*.scss", "scss/**/*.scss"])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dest/css"))
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dest/prefixed"))
        .pipe(rename("style.css"))
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
}

gulp.task('default', gulp.series(Sass, renderPUGtoHTML, gulp.parallel(watch, browser_sync)));