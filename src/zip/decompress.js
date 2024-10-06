import zlib from "zlib";
import { getPath } from "../getPath.js";
import { createReadStream, createWriteStream } from "node:fs";
import { rm } from "node:fs/promises";

const decompress = async () => {
  const fileToDecompress = getPath(import.meta.url, "files", "archive.gz");
  const decompressedFile = getPath(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );
  try {
    const source = createReadStream(fileToDecompress);
    const destination = createWriteStream(decompressedFile);
    const unzip = zlib.createUnzip();
    source.pipe(unzip).pipe(destination);
    rm(fileToDecompress);
  } catch (err) {
    throw new Error(err);
  }
};

await decompress();
