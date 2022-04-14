import * as Path from 'path';
const rootFolder = Path.basename(Path.resolve());

const buildFolder = './build';
const srcFolder = './src';

export const path = {
    build: {
        files: `${buildFolder}`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}