import zlib from "zlib";
import { getPath } from "../getPath.js";
import { createReadStream, createWriteStream } from "node:fs";


const compress = async () => {
    const gzip = zlib.createGzip();
    const fileToCompress = getPath(import.meta.url, "files", "fileToCompress.txt");
    const compressedFile = getPath(import.meta.url, "files", "archive.gz");
    const source = createReadStream(fileToCompress);
    const destination = createWriteStream(compressedFile);
    source.pipe(gzip).pipe(destination);
};

await compress();