const fs = require("fs");
const expect = require("chai").expect;
const { mkdir, tmpDirPath } = require("./lib");

describe("lib", function() {
    it("Should create a directory under the temp folder.", function() {
        const dirPath = tmpDirPath("foo");
        mkdir(dirPath);
        expect(fs.statSync(dirPath).isDirectory()).to.be.true;
    });
});