import { getPath } from "../getPath.js";
import { createReadStream } from "node:fs";

const read = async () => {
    try {
        const fileToRead = getPath(import.meta.url, "files", "fileToRead.txt");
        createReadStream(fileToRead).pipe(process.stdout);
    } catch(err) {
        throw new Error(err);
    }
};

await read();
