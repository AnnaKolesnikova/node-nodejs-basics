import { createReadStream } from "node:fs";
import { getPathFromFiles } from "../getPath.js";

const read = async () => {
  try {
    const fileToReadSrc = getPathFromFiles(
      import.meta.url,
      "files",
      "fileToRead.txt"
    );
    createReadStream(fileToReadSrc).pipe(process.stdout);
  } catch (err) {
    throw new Error(err);
  }
};

await read();
