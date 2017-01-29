const gulp = require('gulp')
const rev = require('gulp-rev')
const revReplace = require('gulp-rev-replace')

gulp.task("assets", () => {
  return gulp.src(["src/*.css", "src/*.js", "src/*.svg"])
    .pipe(rev())
    .pipe(gulp.dest("dist"))
    .pipe(rev.manifest())
    .pipe(gulp.dest("."))
})

gulp.task("build", ["assets"], () => {
  const manifest = gulp.src("./rev-manifest.json")

  return gulp.src("src/index.html")
    .pipe(revReplace({manifest}))
    .pipe(gulp.dest('dist'))
})
