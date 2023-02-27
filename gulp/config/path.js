import * as nodePath from "path"
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = "./dist" // создается автоматически, в процессе работы gulp
const srcFolder = "./src"

const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        pug: `${srcFolder}/html/*.pug`,
        scss: `${srcFolder}/scss/*.scss`,
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*`,
        fonts: `${srcFolder}/fonts/`
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        pug: `${srcFolder}/html/**/*.pug`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ""
}

export { path }