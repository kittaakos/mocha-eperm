import * as fs from "fs-extra";
import * as os from "os";
import * as path from "path";

export function deleteIfPresent(path: string) {
    if (fs.existsSync(path)) {
        if (fs.statSync(path).isFile()) {
            throw new Error("Expected a directory: " + path);
        }
        fs.rmdirSync(path);
    }
}

export function mkdir(path: string) {
    deleteIfPresent(path);
    const obj = {
        path
    };
    console.log("Creating directory under", path, obj);
    fs.mkdirSync(path);
}

export function tmpDirPath(dirName: string) {
    return path.resolve(os.tmpdir(), dirName);
}
