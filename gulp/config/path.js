import * as Path from 'path';
const rootFolder = Path.basename(Path.resolve());

const buildFolder = './build';
const srcFolder = './src';

export const path = {
    build: {
        files: `${buildFolder}`,
    },
    src: {
        files: `${srcFolder}/**/*.*`,
    },
    watch: {},
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}