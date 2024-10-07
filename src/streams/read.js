import { getPath } from "../getPath.js";
import { createReadStream } from "node:fs";

const read = async () => {
  try {
    const fileToRead = getPath(import.meta.url, "files", "fileToRead.txt");
    const readStream = createReadStream(fileToRead);
    readStream.on("error", (err) => {
      console.error("Error reading file: ", err);
    });
    readStream.pipe(process.stdout);
  } catch (err) {
    throw new Error(err);
  }
};

await read();
