import zlib from "zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { getPathFromFiles } from "../getPath.js";

const decompress = async () => {
  const unzip = zlib.createUnzip();
  const compressedFileSrc = getPathFromFiles(
    import.meta.url,
    "files",
    "archive.gz"
  );
  const decompressedFileSrc = getPathFromFiles(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );

  const inputFile = createReadStream(compressedFileSrc);
  const outputFile = createWriteStream(decompressedFileSrc);
  inputFile.pipe(unzip).pipe(outputFile);
};

await decompress();
