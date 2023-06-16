import { createWriteStream } from "node:fs";
import { getPathFromFiles } from "../getPath.js";

const write = async () => {
  const fileToWriteSrc = getPathFromFiles(import.meta.url, "fileToWrite.txt");
  const stream = createWriteStream(fileToWriteSrc);
  process.stdin.pipe(stream);
  console.log("Write any data to the fileToWrite.txt: \n");
};

await write();
