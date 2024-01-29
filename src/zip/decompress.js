import zlib from "zlib";
import { getPath } from "../getPath.js";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
    const unzip = zlib.createUnzip();
    const fileToDecompress = getPath(import.meta.url, "files", "archive.gz");
    const decompressedFile = getPath(import.meta.url, "files", "fileToCompress.txt");
    const source = createReadStream(fileToDecompress);
    const destination = createWriteStream(decompressedFile);
    source.pipe(unzip).pipe(destination);
};

await decompress();