import { getPath } from "../getPath.js";
import { createWriteStream } from "node:fs";

const write = async () => {
    try {
        const fileToWrite = getPath(import.meta.url, "files", "fileToWrite.txt");
        const stream = createWriteStream(fileToWrite);
        process.stdin.pipe(stream);
        console.log("Data to insert in fileToWrite.txt: \n");
    } catch(err) {
        throw new Error(err);
    }
};

await write();
