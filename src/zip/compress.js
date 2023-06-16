import zlib from "zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { getPathFromFiles } from "../getPath.js";

const compress = async () => {
  const gzip = zlib.createGzip();
  const fileToCompressSrc = getPathFromFiles(
    import.meta.url,
    "fileToCompress.txt"
  );
  const compressedFileSrc = getPathFromFiles(import.meta.url, "archive.gz");
  const inputFile = createReadStream(fileToCompressSrc);
  const outputFile = createWriteStream(compressedFileSrc);
  inputFile.pipe(gzip).pipe(outputFile);
};

await compress();
