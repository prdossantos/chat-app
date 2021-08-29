const gulp = require("gulp");
const browserSync = require("browser-sync");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const clean = require("gulp-clean");

gulp.task("clean", () =>
  gulp
    .src(["public/assets/*", "build/*"], {read: false})
    .pipe(clean())
);

gulp.task("components", () =>
  gulp.src([
    "src/**/*.css",
  ])
  .pipe(cleanCSS({ compatibility: "ie9" }))
  .pipe(concat("index.css"))
  .pipe(gulp.dest("public/assets/css"))
  .pipe(browserSync.stream())
);

gulp.task("watch", () => {
  gulp.watch(["src/**/*.css"], gulp.series("clean", "components"));
});


gulp.task("default", gulp.series("clean", "components"));
