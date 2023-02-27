import newer from "gulp-newer"
import imagemin from "gulp-imagemin";

const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(newer(app.path.build.images))
        .pipe(imagemin({
            progressive: true,
            interplaced: true,
            optimizationLevel: 3,
            verbose: true
        }))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())

}

export { images }