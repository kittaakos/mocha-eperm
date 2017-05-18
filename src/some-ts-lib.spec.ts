import "mocha";
import * as chai from "chai";
import * as fs from "fs";
import { mkdir, tmpDirPath } from "./some-ts-lib";

const expect = chai.expect;

describe("some-ts-lib", () => {
    it("Should create a directory under the temp folder.", () => {
        const dirPath = tmpDirPath("foo-ts");
        mkdir(dirPath);
        expect(fs.statSync(dirPath).isDirectory()).to.be.true;
    });
});