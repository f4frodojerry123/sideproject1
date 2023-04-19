const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
// sass complier
// 沒壓縮css
function sassStyle() {
    return src(["css/scss/*.scss"])
      .pipe(sourcemaps.init())
      .pipe(sass.sync().on("error", sass.logError)) // sass ->css
      .pipe(sourcemaps.write())
      .pipe(dest("css"));
  }
  exports.style = sassStyle;

  // 監看所有變動
function watchfile() {
    watch(
      ["css/scss/*.scss"],
      sassStyle
    );
  }

//開發用
exports.default = series(
  sassStyle,
  watchfile
);