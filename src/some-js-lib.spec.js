const fs = require("fs");
const expect = require("chai").expect;
const { mkdir, tmpDirPath } = require("./some-js-lib");

describe("some-js-lib", function() {
    it("Should create a directory under the temp folder.", function() {
        const dirPath = tmpDirPath("foo-js");
        mkdir(dirPath);
        expect(fs.statSync(dirPath).isDirectory()).to.be.true;
    });
});