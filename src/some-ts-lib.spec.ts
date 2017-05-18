import "mocha";
import * as chai from "chai";
import * as fs from "fs-extra";
import { mkdir, tmpDirPath } from "./some-ts-lib";

const uuidV1 = require('uuid/v1');
const expect = chai.expect;

describe("some-ts-lib", () => {

    beforeEach(() => {
        fs.mkdirSync(tmpDirPath("before-all-" + uuidV1()));
    });

    it("Should create a directory under the temp folder.", () => {
        const dirPath = tmpDirPath("foo-ts");
        mkdir(dirPath);
        expect(fs.statSync(dirPath).isDirectory()).to.be.true;
    });
});