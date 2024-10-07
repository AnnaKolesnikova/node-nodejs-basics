import zlib from "zlib";
import { getPath } from "../getPath.js";
import { createReadStream, createWriteStream } from "node:fs";
import { rm } from "node:fs/promises";

const compress = async () => {
  const fileToCompress = getPath(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );
  const compressedFile = getPath(import.meta.url, "files", "archive.gz");
  try {
    const source = createReadStream(fileToCompress);
    const destination = createWriteStream(compressedFile);
    const gzip = zlib.createGzip();
    source.pipe(gzip).pipe(destination);
    rm(fileToCompress);
  } catch (err) {
    throw new Error(err);
  }
};

await compress();
