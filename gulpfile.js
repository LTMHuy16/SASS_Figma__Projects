const { dest, series, src, parallel, watch } = require("gulp");
const concat = require("gulp-concat");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const minify = require("gulp-minify");
const cleancss = require("gulp-clean-css");
const babel = require("gulp-babel");

const scssSrc = "./src/scss/**/main.scss";
const scssWatch = "./src/scss/**/*.scss";
const cssDist = "./src/dist/css";
const cssMiniFile = "./src/dist/css/main.css";

const jsSrc = "./src/js/**/*.js";
const jsDist = "./src/dist/js";

function scss() {
    return src(scssSrc)
        .pipe(plumber())
        .pipe(concat("main.css"))
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(sass().on("error", sass.logError))
        .pipe(dest(cssDist));
}

function minifyCss() {
    return src(cssMiniFile)
        .pipe(cleancss({ compatibility: "ie8" }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest(cssDist));
}

function compileJs() {
    return src([jsSrc])
        .pipe(
            babel({
                presets: ["@babel/env"],
            })
        )
        .pipe(concat("main.js"))
        .pipe(
            minify({
                ext: { min: ".min.js" },
                ignoreFiles: ["min.js"],
            })
        )
        .pipe(dest(jsDist));
}

// Watch files
function watchFile() {
    watch(scssWatch, scss);
    watch(cssMiniFile, minifyCss);
    watch(jsSrc, compileJs);
}

//==== Define complex task ======
const js = series(compileJs);
const css = series(scss, minifyCss);

// Export file
exports.watch = watchFile;
exports.default = watchFile;
exports.js = js;
exports.css = css;
