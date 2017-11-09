// @ts-check

const fs = require("fs-extra");
const os = require("os");
const path = require("path");

function deleteIfPresent(path) {
    if (fs.existsSync(path)) {
        if (fs.statSync(path).isFile()) {
            throw new Error("Expected a directory: " + path);
        }
        fs.rmdirSync(path);
    }
}

function mkdir(path) {
    deleteIfPresent(path);
    const obj = {
        path
    };
    console.log("Creating directory under", path, obj);
    fs.mkdirSync(path);
}

function tmpDirPath(dirName) {
    return path.resolve(os.tmpdir(), dirName);
}

module.exports = {
    deleteIfPresent,
    mkdir,
    tmpDirPath
};
