// @ts-check

const { deleteIfPresent, mkdir, tmpDirPath } = require("./some-js-lib");

(function () {
    const dirPath = tmpDirPath("some-dir-name");
    console.log("Creating a directory under: " + dirPath);
    deleteIfPresent(dirPath);
    mkdir(dirPath);
})();
