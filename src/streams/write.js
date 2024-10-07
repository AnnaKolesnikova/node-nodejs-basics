import { getPath } from "../getPath.js";
import { createWriteStream } from "node:fs";

const write = async () => {
  try {
    const fileToWrite = getPath(import.meta.url, "files", "fileToWrite.txt");
    const writeStream = createWriteStream(fileToWrite);
    writeStream.on("error", (err) => {
      console.error("Error writing into the file: ", err);
    });
    process.stdin.pipe(writeStream);
  } catch (err) {
    throw new Error(err);
  }
};

await write();
