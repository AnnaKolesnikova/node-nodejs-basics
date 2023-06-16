import zlib from "zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { getPathFromFiles } from "../getPath.js";

const decompress = async () => {
  const gzip = zlib.createUnzip();
  const compressedFileSrc = getPathFromFiles(import.meta.url, "archive.gz");
  const uncompressedFileSrc = getPathFromFiles(
    import.meta.url,
    "fileToCompress.txt"
  );

  const inputFile = createReadStream(compressedFileSrc);
  const outputFile = createWriteStream(uncompressedFileSrc);
  inputFile.pipe(outputFile);
};

await decompress();
