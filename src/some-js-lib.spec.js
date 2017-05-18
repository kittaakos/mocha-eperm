const fs = require("fs-extra");
const expect = require("chai").expect;
const { mkdir, tmpDirPath } = require("./some-js-lib");
const uuidV1 = require('uuid/v1');

describe("some-js-lib", function() {

    beforeEach(function() {
        fs.mkdirSync(tmpDirPath("before-all-" + uuidV1()))
    });

    it("Should create a directory under the temp folder.", function() {
        const dirPath = tmpDirPath("foo-js");
        mkdir(dirPath);
        expect(fs.statSync(dirPath).isDirectory()).to.be.true;
    });
});